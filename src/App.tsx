import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Navbar from './components/layout/Navbar';
import HomePage from './components/home/HomePage';
import AuthForm from './components/auth/AuthForm';
import LearnPage from './pages/LearnPage';
import ProfilePage from './pages/ProfilePage';
import StackVisualizer from './components/learning/StackVisualizer';
import BasicConceptsPage from './pages/BasicConceptsPage';

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
              <Route path="/learn/stack" element={<StackVisualizer onOperation={(op) => console.log(op)} />} />
              <Route path="/learn/basics" element={<BasicConceptsPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;