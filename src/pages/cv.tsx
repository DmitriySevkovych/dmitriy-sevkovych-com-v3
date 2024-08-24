import CV from '@/components/pdf/CV'
import DownloadButton from '@/components/pdf/DownloadButton'
import React from 'react'

const _getPdfFileName = (): string => {
    const date = new Date().toISOString().split('T')[0]
    return `Dmitriy-Sevkovych-CV-${date}.pdf`
}

const CVPage: React.FC = () => {
    return (
        <section className="flex flex-col items-center justify-evenly gap-10 p-10">
            <div className="flex w-full justify-evenly">
                <p>TODO: Header here</p>
                <DownloadButton
                    document={<CV />}
                    fileName={_getPdfFileName()}
                />
            </div>

            <div className="flex flex-col items-center">
                <h1>Page is still under construction</h1>
                <p>TODO: Projects here</p>
            </div>

            <div>
                <p>TODO: Education here</p>
            </div>
        </section>
    )
}

export default CVPage
