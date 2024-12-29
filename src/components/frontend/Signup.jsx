import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState(''); // Added state for name
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // Handle signup (sending to backend, etc.)
    console.log({ name, email, password });
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-yellow-50">
        <div className="bg-white shadow-xl rounded-lg p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold text-yellow-900 mb-4 text-center">
            Create Your Account on <span className="text-lime-600">EchoShelf</span>
          </h1>
          <p className="text-gray-600 mb-6 text-center">
            Start building your bookshelf and share with the world.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-md"
                value={name}
                onChange={(e) => setName(e.target.value)} // Fixed this
                required
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-4 py-2 border rounded-md"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Confirm your password"
              />
            </div>
            <button type="submit" className="w-full bg-yellow-900 text-white py-2 px-4 rounded-md focus:ring">
              Sign Up
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-yellow-900 font-medium hover:underline">
                Login now
              </Link>
            </p>
          </div>
        </div>
      </div>
      <footer className="bg-yellow-900 text-white p-4 text-center">
        <p>© 2024 EchoShelf. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default SignUp;
