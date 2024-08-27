import { CVData } from '@/model/cv'
import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer'

// TODO: try to integrate `react-pdf-tailwind` with nextjs
const styles = StyleSheet.create({
    page: { backgroundColor: 'tomato' },
    section: { color: 'white', textAlign: 'center', margin: 30 },
})

type CVPDFProps = CVData

const CVPDF: React.FC<CVPDFProps> = ({ education, projects }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>Section #1</Text>
            </View>
            <View style={styles.section}>
                <Text>Section #2</Text>
            </View>
        </Page>
    </Document>
)

export default CVPDF
