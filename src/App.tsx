import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Navbar from './components/layout/Navbar';
import HomePage from './components/home/HomePage';
import AuthForm from './components/auth/AuthForm';
import LearnPage from './pages/LearnPage';
import ProfilePage from './pages/ProfilePage';
import LeaderboardPage from './pages/LeaderboardPage';
import ProblemSolvingPage from './pages/ProblemSolvingPage';
import QuizListPage from './pages/QuizListPage';
import StackVisualizer from './components/learning/StackVisualizer';
import InfixToPostfixGame from './components/learning/infixToPostfix/infixToPostfixGame';
import BasicConceptsPage from './pages/BasicConceptsPage';
import ArraysPage from './pages/ArraysPage';
import BasicAlgorithmsPage from './pages/BasicAlgorithmsPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<AuthForm />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/learn" element={<LearnPage />} />
              <Route path="/leaderboard" element={<LeaderboardPage />} />
              <Route path="/problems" element={<ProblemSolvingPage />} />
              <Route path="/quizzes" element={<QuizListPage />} />
              <Route path="/learn/stack" element={<StackVisualizer onOperation={(op) => console.log(op)} />} />
              <Route path="/learn/infix-postfix" element={<InfixToPostfixGame />} />
              <Route path="/learn/basics" element={<BasicConceptsPage />} />
              <Route path="/learn/arrays" element={<ArraysPage />} />
              <Route path="/learn/algorithms" element={<BasicAlgorithmsPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;