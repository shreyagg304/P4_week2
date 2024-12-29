import React, { useState } from 'react';

const Profile = () => {
  const [username, setUsername] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [bio, setBio] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
  const [booksRead, setBooksRead] = useState(45); // Example: 45 books read
  const [timeSpentReading, setTimeSpentReading] = useState('120 hours'); // Example: 120 hours spent reading
  const [ecoRewardPoints, setEcoRewardPoints] = useState(350); // Example: 350 eco points
  const [co2Saved, setCo2Saved] = useState('20 kg'); // Example: 20 kg CO₂ saved
  const [treesPlanted, setTreesPlanted] = useState(50); // Example: 50 trees planted
  const [transactions, setTransactions] = useState([
    { type: 'Buy', book: 'The Great Gatsby', date: '2024-10-05' },
    { type: 'Sell', book: '1984', date: '2024-10-12' },
  ]);
  const [reviews, setReviews] = useState([
    { book: 'To Kill a Mockingbird', rating: 5, review: 'An amazing read!' },
    { book: 'Moby Dick', rating: 4, review: 'Very interesting but lengthy.' },
  ]);

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-yellow-50 py-8">
      <div className="bg-white shadow-xl rounded-lg p-8 w-3/4">
        <h1 className="text-3xl font-bold text-yellow-900 mb-4 text-center">
          Welcome Back, <span className="text-lime-600">{username}</span>
        </h1>

        {/* Profile Information */}
        <div className="space-y-6 mb-8">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 border rounded-md"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              readOnly
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
              readOnly
            />
          </div>

          <div>
            <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
              Bio
            </label>
            <textarea
              id="bio"
              className="w-full px-4 py-2 border rounded-md"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>
        </div>

        {/* Reading Habits Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-yellow-900 mb-2">Reading Habits</h2>
          <p className="text-gray-700">Books Read: {booksRead}</p>
          <p className="text-gray-700">Time Spent Reading: {timeSpentReading}</p>
        </div>

        {/* Sustainability Stats Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-yellow-900 mb-2">Sustainability Stats</h2>
          <p className="text-gray-700">Eco-Reward Points: {ecoRewardPoints}</p>
          <p className="text-gray-700">CO₂ Saved: {co2Saved}</p>
          <p className="text-gray-700">Trees Planted: {treesPlanted}</p>
        </div>

        {/* Transaction History Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-yellow-900 mb-2">Transaction History</h2>
          <ul className="space-y-2">
            {transactions.map((transaction, index) => (
              <li key={index} className="text-gray-700">
                {transaction.type} - {transaction.book} (Date: {transaction.date})
              </li>
            ))}
          </ul>
        </div>

        {/* Reviews and Ratings Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-yellow-900 mb-2">Reviews and Ratings</h2>
          <ul className="space-y-2">
            {reviews.map((review, index) => (
              <li key={index} className="text-gray-700">
                <p>
                  <strong>{review.book}</strong> - Rating: {review.rating} / 5
                </p>
                <p>"{review.review}"</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Save Button */}
        <button
          type="button"
          className="w-full bg-yellow-900 text-white py-2 px-4 rounded-md mt-6 hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          Save Changes
        </button>

        {/* Logout Button */}
        <div className="mt-4 text-center">
          <button
            type="button"
            className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
    <footer className="bg-yellow-900 text-white p-4 text-center">
      <p>© 2024 EchoShelf. All Rights Reserved.</p>
    </footer>
    </div>
  );
};

export default Profile;