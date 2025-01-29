import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Brain, Award, HelpCircle } from 'lucide-react';
import DsaFact from './DsaFact';
import QuizPreview from './QuizPreview';
import ChallengeCard from './ChallengeCard';

// Move data to separate files for better organization
import { dsaFacts, featuredQuizzes, dailyChallenges } from './homeData.ts';

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Master Data Structures & Algorithms
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Learn, practice, and master DSA through interactive lessons, quizzes, and challenges.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/learn"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            <BookOpen className="w-5 h-5" />
            Start Learning
          </Link>
        </div>
      </section>

      {/* DSA Facts */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Brain className="w-6 h-6 text-red-600" />
          DSA Facts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dsaFacts.map((fact, index) => (
            <DsaFact key={index} {...fact} />
          ))}
        </div>
      </section>

      {/* Featured Quizzes */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-purple-600" />
          Featured Quizzes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredQuizzes.map((quiz, index) => (
            <QuizPreview key={index} {...quiz} />
          ))}
        </div>
      </section>

      {/* Daily Challenges */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Award className="w-6 h-6 text-yellow-600" />
          Daily Challenges
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dailyChallenges.map((challenge, index) => (
            <ChallengeCard key={index} {...challenge} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;