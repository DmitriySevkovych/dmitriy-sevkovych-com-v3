'use client'

import ReactPDF, { DocumentProps } from '@react-pdf/renderer'
import { FileText } from 'lucide-react'
import dynamic from 'next/dynamic'
import React from 'react'

import { Button } from '../ui/button'

// Cf. https://benhur-martins.medium.com/nextjs-14-and-react-pdf-integration-ccd38b1fd515
const PDFDownloadLink = dynamic(
    () => import('@react-pdf/renderer').then((mod) => mod.PDFDownloadLink),
    {
        ssr: false,
        //   loading: () => <p>Loading...</p>,
    }
)

interface DownloadButtonProps extends ReactPDF.PDFDownloadLinkProps {}

const DownloadButton: React.FC<DownloadButtonProps> = ({
    document,
    fileName,
    className,
}) => {
    const _button = (
        <Button className="gap-1" variant={'outline'}>
            {' '}
            <FileText strokeWidth={1} />
            Download PDF
        </Button>
    )

    return (
        <PDFDownloadLink
            className={className}
            document={document}
            fileName={fileName}
        >
            {({ blob, url, loading, error }) =>
                loading ? 'Loading document...' : _button
            }
        </PDFDownloadLink>
    )
}

export default DownloadButton
