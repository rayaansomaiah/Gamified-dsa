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
    <div>
      {/* Hero Section with Background GIF */}
      <div
        className="w-full relative bg-cover bg-center h-[450px] flex items-center justify-center mb-16"
        style={{ backgroundImage: `url('https://i.pinimg.com/originals/8d/62/1f/8d621f66f551b6a39072473d52280ff0.gif')` }}
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Hero Content */}
        <section className="text-center z-10">
          <h1 className="text-4xl font-bold text-white mb-4">
            Master Data Structures & Algorithms
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Learn, practice, and master DSA through interactive lessons, quizzes, and challenges.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/learn"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-800"
            >
              <BookOpen className="w-5 h-5" />
              Start Learning
            </Link>
          </div>
        </section>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto">
        {/* DSA Facts Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Brain className="w-6 h-6 text-blue-600" />
            DSA Facts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dsaFacts.map((fact, index) => (
              <DsaFact key={index} {...fact} />
            ))}
          </div>
        </section>

        {/* Featured Quizzes Section */}
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

        {/* Daily Challenges Section */}
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

      {/* Footer */}
      <footer className="text-center py-4 bg-green-600 text-white mt-16">
        © 2025 DSA Master. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
