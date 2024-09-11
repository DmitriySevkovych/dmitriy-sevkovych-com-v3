/* eslint-disable jsx-a11y/alt-text */
import { CVData } from '@/model/cv'
import { Document, Image, Page, Text, View } from '@react-pdf/renderer'
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

const CVPDF: React.FC<CVPDFProps> = ({ education, projects, skills }) => (
    <Document>
        <Page size="A4">
            <View style={tw('w-full h-full px-3 py-8')}>
                {/* Header */}
                <View style={tw('flex-row justify-evenly items-center gap-5')}>
                    {/* Avatar */}
                    <View style={tw('flex-row items-center gap-5')}>
                        <Image
                            style={tw('h-28 w-28 rounded-full')}
                            src="/sevkovych_portrait_375.png"
                        />
                        <View>
                            <Text style={tw('text-xl leading-snug')}>
                                Dmitriy Sevkovych
                            </Text>
                            <Text style={tw('text-lg leading-snug')}>
                                M.Sc. Mathematics
                            </Text>
                            <Text
                                style={tw(
                                    'mt-1 text-base font-light leading-tight'
                                )}
                            >
                                Freelance IT Specialist
                            </Text>
                            <Text
                                style={tw(
                                    'mt-1 text-base font-light leading-tight'
                                )}
                            >
                                Web + AI/ML
                            </Text>
                        </View>
                    </View>

                    {/* Intro text */}
                    <View style={tw('max-w-[45%] gap-2 text-sm leading-snug')}>
                        <Text>
                            You need help with a little bit of everything in
                            your software project? Lucky you!
                        </Text>
                        <Text>
                            I am freelance one-man IT department with hands-on
                            professional experience in designing, developing,
                            deploying and monitoring web applications and
                            machine learning projects.
                        </Text>

                        <Text>
                            Give me a call, ping me on LinkedIn or send me an
                            e-mail!
                        </Text>

                        <View style={tw('flex-row justify-evenly')}>
                            <Text style={tw('text-accent')}>
                                +49 177 837 11 63
                            </Text>
                            <Text style={tw('text-muted')}>{'//'}</Text>
                            <Text style={tw('text-accent')}>
                                dmitriy@sevkovych.com
                            </Text>
                        </View>
                    </View>
                </View>

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
