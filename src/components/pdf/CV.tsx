import { CVData } from '@/model/cv'
import { Document, Page, Text, View } from '@react-pdf/renderer'
import { createTw } from 'react-pdf-tailwind'

const tw = createTw({
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                border: '#e2e8f0',
                ring: '#020817',
                background: '#ffffff',
                foreground: '#020817',
                primary: '#0f172a',
                'primary-foreground': '#f8fafc',
                secondary: '#f1f5f9',
                'secondary-foreground': '#0f172a',
                muted: '#cccccc',
                'muted-foreground': '#64748b',
                accent: '#ee7411',
                'accent-foreground': '#0f172a',
                card: '#ffffff',
                'card-foreground': '#020817',
            },
            borderRadius: {
                lg: '0.5rem',
                md: 'calc(0.5rem - 2px)',
                sm: 'calc(0.5rem - 4px)',
            },
        },
    },
})

type CVPDFProps = CVData

const CVPDF: React.FC<CVPDFProps> = ({ education, projects }) => (
    <Document>
        <Page size="A4">
            <View>
                <Text style={tw('text-accent')}>Section #1</Text>
            </View>
        </Page>
    </Document>
)

export default CVPDF
