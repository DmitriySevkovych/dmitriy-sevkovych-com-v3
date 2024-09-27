import { CVData } from '@/model/cv'
import { Document, Page, Text, View } from '@react-pdf/renderer'

import Header from './Header'
import { tw } from './reactPdfTailwind.config'

type CVPDFProps = CVData

const CVPDF: React.FC<CVPDFProps> = ({ education, projects, skills }) => (
    <Document
        title="Dmitriy Sevkovych - CV"
        subject="PDF was generated from https://dmitriy.sevkovych.com"
        author="Dmitriy Sevkovych"
        creator="Dmitriy Sevkovych"
        language="en"
    >
        <Page size="A4" style={tw('w-full h-full px-3 py-8 font-sans')}>
            {/* Header */}
            <Header />

            {/* Body */}
            <View style={tw('self-center mt-10 items-center gap-5')}>
                {/* Skills */}
                {/* <View style={tw('gap-2')}>
                        {
                            skills.map((skill, i) => (
                                <View key={i} style={tw('gap-1')} >
                                    <Text style={tw('text-lg font-light')}>{skill.caption}</Text>
                                    <View>
                                        {
                                            skill.subskills.map((s, j) => (
                                                <View key={`${i}-${j}`} style={tw('flex-row text-sm gap-3')}>
                                                    <Text>{`${s.caption}:`}</Text>
                                                    <Text>{s.tools.join(', ')}</Text>
                                                </View>
                                            ))
                                        }
                                    </View>
                                </View>
                            ))
                        }
                    </View> */}

                {/* Projects */}
                <View style={tw('gap-3 w-[90vw]')}>
                    <Text style={tw('font-light')}>Projects</Text>
                    {projects.map((project, i) => (
                        <View
                            key={i}
                            style={tw(
                                'gap-1 border rounded-lg border-muted px-4 py-3 text-sm w-full'
                            )}
                            wrap={false}
                        >
                            <Text>{`${project.date_from} - ${project.date_until} // ${project.location}`}</Text>
                            <Text
                                style={tw('my-1 text-lg font-medium')}
                            >{`${project.title} @ ${project.client}`}</Text>
                            <Text>{project.description}</Text>
                            {/* <View>
                                <Text style={tw('text-lg font-light')}>Responsibilities:</Text>
                                {
                                    project.responsibilities.map((resp, j) => (
                                        <Text key={`${i}-${j}`} style={tw('text-sm gap-5')}>{resp}</Text>
                                    ))
                                }
                            </View> */}
                            <Text style={tw('m-auto')}>&mdash;</Text>
                            <Text style={tw('m-auto')}>
                                {project.techstack
                                    .map((t) => t.caption)
                                    .join(', ')}
                            </Text>
                        </View>
                    ))}
                </View>
                {/* Education */}
                {/* TODO */}

                <Text style={tw('text-muted')}>
                    CV PDF is still under construction
                </Text>
                <Text style={tw('text-muted text-lg')}>
                    Yours truly, Dmitriy Sevkovych
                </Text>
            </View>
        </Page>
    </Document>
)

export default CVPDF
