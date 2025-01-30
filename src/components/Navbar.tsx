import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          DSA Master
        </Link>
        <div className="flex gap-4">
          <Link to="/learn" className="hover:underline">
            Learn
          </Link>
          <Link to="/quizzes" className="hover:underline">
            Quizzes
          </Link>
          <Link to="/challenges" className="hover:underline">
            Challenges
          </Link>
          {isAuthenticated && (
            <Link to="/leaderboard" className="hover:underline">
              Leaderboard
            </Link>
          )}
          <Link to={isAuthenticated ? "/logout" : "/login"} className="hover:underline">
            {isAuthenticated ? "Logout" : "Login"}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
