import React from 'react';
import DocumentViewer from '../components/learning/DocumentViewer';

const BasicConceptsPage = () => {
  return (
    <DocumentViewer
      title="Basic DSA Concepts"
      description="Learn the fundamental concepts of Data Structures and Algorithms, including time complexity, space complexity, and basic problem-solving approaches."
      pdfUrl="https://www.mta.ca/~rrosebru/oldcourse/263114/Dsa.pdf"
    />
  );
};

export default BasicConceptsPage;