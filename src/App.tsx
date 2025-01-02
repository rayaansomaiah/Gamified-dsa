import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Navbar from './components/layout/Navbar';
import AuthForm from './components/auth/AuthForm';
import StackVisualizer from './components/learning/StackVisualizer';
import LearnPage from './pages/LearnPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <Routes>
            <Route path="/login" element={<AuthForm />} />
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/learn/stack" element={<StackVisualizer onOperation={(op) => console.log(op)} />} />
            <Route
              path="/"
              element={
                <main className="max-w-7xl mx-auto px-4 py-8">
                  <div className="grid gap-8">
                    <section className="text-center">
                      <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Master Data Structures & Algorithms
                      </h1>
                      <p className="text-xl text-gray-600 mb-8">
                        Learn DSA concepts through interactive visualizations and challenges
                      </p>
                    </section>

                    <section className="bg-white rounded-lg shadow-md p-6">
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Stack Operations
                      </h2>
                      <StackVisualizer
                        onOperation={(operation) => {
                          console.log('Stack operation:', operation);
                        }}
                      />
                    </section>
                  </div>
                </main>
              }
            />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;