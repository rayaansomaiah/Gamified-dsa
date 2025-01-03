import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Navbar from './components/layout/Navbar';
import HomePage from './components/home/HomePage';
import AuthForm from './components/auth/AuthForm';
import LearnPage from './pages/LearnPage';
import StackVisualizer from './components/learning/StackVisualizer';
import BasicConceptsPage from './pages/BasicConceptsPage';
import ProtectedRoute from './components/routes/ProtectedRoute';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/login" element={<AuthForm />} />
  <Route path="/learn" element={
    <ProtectedRoute>
      <LearnPage />
    </ProtectedRoute>
  } />
  <Route path="/learn/stack" element={
    <ProtectedRoute>
      <StackVisualizer onOperation={(op) => console.log(op)} />
    </ProtectedRoute>
  } />
  <Route path="/learn/basics" element={
    <ProtectedRoute>
      <BasicConceptsPage />
    </ProtectedRoute>
  } />
</Routes>
        </div>
      </Router>
    </Provider>
  );
}
export default App;