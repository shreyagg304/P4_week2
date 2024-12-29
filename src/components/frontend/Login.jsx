import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { email, password };

    try {
      const response = await axios.post('http://localhost:5174/api/user/login', userData);

      if (response.status === 200) {
        // Store token and login status
        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('isLoggedIn', 'true'); // Set login status to true
        navigate('/home');  // Redirect to the home page or dashboard
      }
    } catch (error) {
      setError(error.response?.data?.message || "Invalid email or password");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-yellow-50">
        <div className="bg-white shadow-xl rounded-lg p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold text-yellow-900 mb-4 text-center">
            Welcome Back to <span className="text-lime-600">EchoShelf</span>
          </h1>
          <p className="text-gray-600 mb-6 text-center">
            Explore, share, and build your bookshelf with us.
          </p>

          {error && <p className="text-red-500 text-center">{error}</p>} {/* Display error message */}

          <form onSubmit={handleSubmit} className="space-y-6">
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
            <button type="submit" className="w-full bg-yellow-900 text-white py-2 px-4 rounded-md focus:ring">
              Login
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="text-yellow-900 font-medium hover:underline">
                Sign up now
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

export default Login;
