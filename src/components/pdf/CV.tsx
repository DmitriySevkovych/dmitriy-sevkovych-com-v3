import { CVData } from '@/model/cv'
import { Document, Page, Text, View } from '@react-pdf/renderer'

import Header from './Header'
import { tw } from './reactPdfTailwind.config'

type CVPDFProps = CVData

const CVPDF: React.FC<CVPDFProps> = ({ education, projects, skills }) => {
    const projectsToPrint = projects.filter((project) => !project.dontPrint)
    return (
        <Document
            title="Dmitriy Sevkovych - CV"
            subject="PDF was generated from https://dmitriy.sevkovych.com"
            author="Dmitriy Sevkovych"
            creator="Dmitriy Sevkovych"
            language="en"
        >
            <Page size="A4" style={tw('w-full h-full px-3 py-6 font-sans')}>
                {/* Header */}
                <Header />

                {/* Body */}
                <View style={tw('gap-6 self-center items-center mt-6')}>
                    {/* Skills */}
                    <View style={tw('gap-3 w-[90vw]')}>
                        <Text style={tw('font-light')}>Skills</Text>
                        <Text style={tw('text-sm mx-auto')}>
                            {skills
                                .map((s) => {
                                    if (s.caption === 'Other') {
                                        return 'Project Management'
                                    }
                                    return s.caption
                                })
                                .join('   -   ')}
                        </Text>
                    </View>

                    {/* Education */}
                    <View style={tw('gap-3 w-[90vw]')}>
                        <Text style={tw('font-light')}>Education</Text>

                        <View
                            style={tw('flex-row gap-5 justify-between w-full')}
                        >
                            {education.map((edu, i) => (
                                <View
                                    key={i}
                                    style={tw(
                                        'gap-2 border border-muted rounded-lg text-sm grow px-4 py-3 w-[33vw]'
                                    )}
                                    wrap={false}
                                >
                                    <Text
                                        style={tw('text-sm')}
                                    >{`${edu.date_from} - ${edu.date_until} // Stuttgart`}</Text>
                                    <View
                                        style={tw(
                                            'mb-2 text-lg font-medium leading-tight'
                                        )}
                                    >
                                        <Text>{edu.title}</Text>
                                        <Text>{`@ ${edu.location}`}</Text>
                                    </View>

                                    <View>
                                        <Text>Focus:</Text>
                                        {edu.focus.map((item, j) => (
                                            <Text
                                                key={`${i}-${j}`}
                                                style={tw('font-light pl-2')}
                                            >
                                                {' >  '}
                                                {item}
                                            </Text>
                                        ))}
                                    </View>
                                    <View style={tw('flex-row gap-1')}>
                                        <Text>Minor:</Text>
                                        <Text style={tw('font-light')}>
                                            {edu.minor}
                                        </Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* Projects */}
                    <View style={tw('gap-3 w-[90vw]')}>
                        <Text style={tw('font-light')}>Projects</Text>
                        {projectsToPrint.map((project, i) => (
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
                                <Text style={tw('m-auto')}>&mdash;</Text>
                                <Text style={tw('m-auto')}>
                                    {project.techstack
                                        .map((t) => t.caption)
                                        .join(', ')}
                                </Text>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Footer */}
                <Text
                    style={tw('mx-auto text-sm text-muted font-light pt-4')}
                    render={({ pageNumber, totalPages }) =>
                        `${pageNumber} / ${totalPages}`
                    }
                    fixed
                />
            </Page>
        </Document>
    )
}

export default CVPDF
