// Types for our data
interface DsaFact {
    fact: string;
    category: string;
  }
  
  interface Quiz {
    title: string;
    questionCount: number;
    category: string;
    path: string;
  }
  
  interface Challenge {
    title: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    timeLimit: string;
    points: number;
  }
  
  export const dsaFacts: DsaFact[] = [
    {
      fact: "The time complexity O(1) means an operation takes the same time regardless of input size.",
      category: "Time Complexity"
    },
    {
      fact: "Stack data structure follows LIFO (Last In, First Out) principle, like a stack of plates.",
      category: "Data Structures"
    },
    {
      fact: "Binary search only works on sorted arrays but is incredibly efficient with O(log n) complexity.",
      category: "Algorithms"
    }
  ];
  
  export const featuredQuizzes: Quiz[] = [
    {
      title: "Array Operations Mastery",
      questionCount: 10,
      category: "Arrays",
      path: "/quiz/arrays"
    },
    {
      title: "Stack & Queue Basics",
      questionCount: 8,
      category: "Data Structures",
      path: "/quiz/stack-queue"
    }
  ];
  
  export const dailyChallenges: Challenge[] = [
    {
      title: "Reverse a String using Stack",
      difficulty: "Easy",
      timeLimit: "15 mins",
      points: 50
    },
    {
      title: "Implement Queue using Stacks",
      difficulty: "Medium",
      timeLimit: "30 mins",
      points: 100
    }
  ];