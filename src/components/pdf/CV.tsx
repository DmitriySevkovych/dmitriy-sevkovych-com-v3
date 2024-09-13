import { CVData } from '@/model/cv'
import { Document, Image, Page, Text, View } from '@react-pdf/renderer'

import Header from './Header'
import { tw } from './reactPdfTailwind.config'

type CVPDFProps = CVData

const CVPDF: React.FC<CVPDFProps> = ({ education, projects, skills }) => (
    <Document>
        <Page size="A4">
            <View style={tw('w-full h-full px-3 py-8')}>
                {/* Header */}
                <Header />

                {/* Body */}
                <View style={tw('self-center mt-10 items-center')}>
                    <Text style={tw('text-muted')}>
                        CV PDF is still under construction
                    </Text>
                    <Text style={tw('text-muted text-lg')}>
                        Yours truly, Dmitriy Sevkovych
                    </Text>
                </View>
            </View>
        </Page>
    </Document>
)

export default CVPDF
