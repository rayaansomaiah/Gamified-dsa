import React, { useState } from 'react';
import { Book, CheckCircle, ArrowRight, Link } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

interface Section {
  id: string;
  title: string;
  content: string;
  completed: boolean;
}

const BasicConceptsPage = () => {
  const [sections, setSections] = useState<Section[]>([
    {
      id: '1',
      title: 'Introduction to Data Structures',
      content: `A data structure is a specialized format for organizing, processing, retrieving and storing data. 
      They are designed to manage data in different ways for different purposes, making data manipulation efficient 
      based on the specific requirements of the application.
      
      Key Concepts:
      • Organization of data
      • Memory allocation
      • Data manipulation efficiency
      • Abstract data types`,
      completed: false
    },
    {
      id: '2',
      title: 'Types of Data Structures',
      content: `Data structures are broadly classified into two categories:

      1. Linear Data Structures:
         • Arrays
         • Linked Lists
         • Stacks
         • Queues
      
      2. Non-Linear Data Structures:
         • Trees
         • Graphs
         • Hash Tables
         • Heaps`,
      completed: false
    },
    {
      id: '3',
      title: 'Structures (Records)',
      content: `A structure is a user-defined data type that groups related data elements of different types under a single name.

      Key Characteristics:
      • Combines different data types
      • Each element is called a member/field
      • Members can be accessed using dot notation
      • Can include other structures (nested structures)

      Example Structure:
      struct Student {
          string name;
          int age;
          float gpa;
          string major;
      }

      Common Use Cases:
      • Employee Records
      • Student Information
      • Product Details
      • Date and Time
      
      Benefits:
      • Logical grouping of related data
      • Better organization
      • Enhanced code readability
      • Simplified parameter passing`,
      completed: false
    },
    {
      id: '4',
      title: 'Array Structures',
      content: `Arrays are the most basic and widely used data structures. They store elements in contiguous memory locations.

      Characteristics:
      • Fixed size (in most languages)
      • Random access (O(1) time complexity)
      • Homogeneous elements
      
      Common Operations:
      • Insertion: O(n)
      • Deletion: O(n)
      • Access: O(1)
      • Search: O(n) for unsorted, O(log n) for sorted`,
      completed: false
    },
    {
      id: '5',
      title: 'Array of Structures',
      content: `An array of structures combines the features of arrays and structures to store multiple records of the same type.

      Example Use Cases:
      • Student Records
      • Employee Database
      • Product Inventory
      
      Benefits:
      • Organized data grouping
      • Efficient memory usage
      • Easy data manipulation
      
      Example:
      Student[] students = new Student[100];  // Array of Student structures
      
      Common Operations:
      • Adding new records
      • Searching by field
      • Sorting based on specific fields
      • Batch processing of records`,
      completed: false
    }
  ]);

  const [feedback, setFeedback] = useState<string>('');
  const [progress, setProgress] = useState<number>(0);

  const markAsCompleted = (sectionId: string) => {
    setSections(prevSections => {
      const newSections = prevSections.map(section => 
        section.id === sectionId ? { ...section, completed: true } : section
      );
      
      const completedCount = newSections.filter(s => s.completed).length;
      const newProgress = (completedCount / newSections.length) * 100;
      setProgress(newProgress);
      
      if (newProgress === 100) {
        setFeedback('Congratulations! You\'ve completed all basic concepts! 🎉');
      } else {
        setFeedback(`Great progress! You've completed ${completedCount} out of ${newSections.length} sections.`);
      }
      
      return newSections;
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Basic Data Structure Concepts</h1>
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Your Progress</span>
            <span className="text-sm font-medium text-blue-600">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-500" 
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        
        {feedback && (
          <div className="bg-green-50 text-green-700 p-4 rounded-lg mb-6 flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            {feedback}
          </div>
        )}
      </div>

      <div className="space-y-6">
        {sections.map((section) => (
          <div key={section.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
              {section.completed ? (
                <span className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  Completed
                </span>
              ) : (
                <button
                  onClick={() => markAsCompleted(section.id)}
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                >
                  <Book className="w-4 h-4" />
                  Mark as Complete
                </button>
              )}
            </div>
            <div className="prose max-w-none">
              <pre className="whitespace-pre-wrap font-sans text-gray-600">
                {section.content}
              </pre>
            </div>
          </div>
        ))}
      </div>

      {progress === 100 && (
        <div className="mt-8 text-center">
          <RouterLink 
            to="/learn" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Continue Learning
            <ArrowRight className="w-5 h-5" />
          </RouterLink>
        </div>
      )}
      {progress === 100 && (
  <div className="mt-8 text-center space-y-4">
    <p className="text-lg text-gray-600">Ready to test your knowledge?</p>
    <RouterLink 
      to="/quiz/basics" 
      className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
    >
      Take Quiz
      <ArrowRight className="w-5 h-5" />
    </RouterLink>
  </div>
)}
    </div>
  );
};

export default BasicConceptsPage;