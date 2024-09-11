'use client'

import ReactPDF from '@react-pdf/renderer'
import dynamic from 'next/dynamic'
import React from 'react'

// Cf. https://benhur-martins.medium.com/nextjs-14-and-react-pdf-integration-ccd38b1fd515
const PDFViewer = dynamic(
    () => import('@react-pdf/renderer').then((mod) => mod.PDFViewer),
    {
        ssr: false,
        //   loading: () => <p>Loading...</p>,
    }
)

const WrappedPDFViewer: React.FC<ReactPDF.PDFViewerProps> = ({
    children,
    className,
}) => {
    return (
        <PDFViewer className={className} width="100%">
            {children}
        </PDFViewer>
    )
}

export default WrappedPDFViewer
