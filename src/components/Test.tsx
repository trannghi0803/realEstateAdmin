import React from "react";
import "./ComponentStyles.css";
import { OpenFile, Viewer } from '@react-pdf-viewer/core';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library
import { Resources } from "../constants";
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';
import { SelectionMode } from '@react-pdf-viewer/selection-mode';
interface IProps {
}

export default function Test(props: IProps) {
    const toolbarPluginInstance = toolbarPlugin({
        getFilePlugin: {
            fileNameGenerator: (file: OpenFile) => {
                const fileName = file.name.substring(file.name.lastIndexOf('/') + 1);
                return `a-copy-of-\${fileName}`;
            }
        },
        searchPlugin: {
            keyword: 'PDF'
        },
        selectionModePlugin: {
            selectionMode: SelectionMode.Hand
        },
        
    });
    const { Toolbar } = toolbarPluginInstance;
    return (
        <>
        <Toolbar />
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
            <Viewer fileUrl={Resources.FILE.PDF}
                plugins={[
                    toolbarPluginInstance
                ]}  
            />
        </Worker>
        </>
        
    );
}
