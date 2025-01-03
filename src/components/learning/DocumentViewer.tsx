import React from 'react';
import { FileText, Download } from 'lucide-react';

interface DocumentViewerProps {
  title: string;
  description: string;
  pdfUrl: string;
}

const DocumentViewer: React.FC<DocumentViewerProps> = ({ title, description, pdfUrl }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-gray-600 mb-6">{description}</p>
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          <Download className="w-5 h-5" />
          Download PDF
        </a>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-4 bg-gray-50 border-b flex items-center gap-2">
          <FileText className="w-5 h-5 text-indigo-600" />
          <span className="font-medium">Document Preview</span>
        </div>
        <iframe
          src={`${pdfUrl}#view=FitH`}
          className="w-full h-[800px]"
          title={title}
        />
      </div>
    </div>
  );
};

export default DocumentViewer;