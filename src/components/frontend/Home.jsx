import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeaderImage from '/header_pic.png';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filtergenres, setFiltergenres] = useState('All');

  // Fetch books from JSON or API
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('/bookData.json');
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  // Filtered and searched books
  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filtergenres === 'All' || book.genres.some(genres => genres === filtergenres);
    return matchesSearch && matchesFilter;
  });

  const addToCart = (book) => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    storedCart.push(book); // Add the book to the cart array
    localStorage.setItem('cart', JSON.stringify(storedCart)); // Store the updated cart in localStorage
  };

  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Hero Section */}
      <section className="text-center p-8">
        <h2 className="text-6xl font-bold text-yellow-900 mb-4 max-sm:text-4xl">Welcome to EchoShelf</h2>
        <p className="text-xl text-gray-600 mb-10">Explore, share, and build your bookshelf with us.</p>
        <img src={HeaderImage} alt="People reading books" className="mx-auto" />
      </section>

      {/* Search and Filter Section */}
      <section className="px-8">
        <div className="flex flex-wrap justify-between items-center">
          <input
            type="text"
            placeholder="Search books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-lime-500 rounded-md p-2 md:w-1/4 max-sm:w-full mt-4"
          />
          <select
            value={filtergenres}
            onChange={(e) => setFiltergenres(e.target.value)}
            className="border border-lime-500 rounded-md p-2 md:w-1/4 max-sm:w-full mt-4"
          >
            <option value="All">All Genres</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Science">Science</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Classics">Classics</option>
            <option value="Adventure">Adventure</option>
            <option value="Thriller">Thriller</option>
            <option value="Mystery">Mystery</option>
            <option value="Drama">Drama</option>
            <option value="Memoir">Memoir</option>
            <option value="Biography">Biography</option>
            <option value="Romance">Romance</option>
            <option value="Historical Fiction">Historical Fiction</option>
            <option value="Philosophy">Philosophy</option>
            <option value="Gothic Fiction">Gothic Fiction</option>
            <option value="Dystopian">Dystopian</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Young Adult">Young Adult</option>
          </select>
        </div>
      </section>

      {/* Book Listing */}
      <section className="px-8 py-6">
        <h3 className="text-4xl font-bold text-yellow-900 m-6 text-center">Featured Books</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <div
                key={book.id}
                className="p-4 border rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-48 object-cover rounded-md mb-2"
                />
                <h4 className="text-xl font-semibold">{book.title}</h4>
                <p className="text-gray-600">Author: {book.author}</p>
                <p className="text-gray-600">Genres: {book.genres.join(', ')}</p>
                <p className="font-bold text-yellow-900">{book.price}</p>
                <div className="flex space-x-5 mt-4 justify-center ">
                  {/* Link to the details page */}
                  <Link to={`/book/${book.id}`}>
                    <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-yellow-800 focus:ring">
                      Details
                    </button>
                  </Link>
                  <button
                    onClick={() => addToCart(book)} // Add book to cart on button click
                    className="bg-green-500 text-white py-2 px-4 rounded hover:bg-yellow-800 focus:ring"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No books match your criteria.</p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-yellow-900 text-white p-4 text-center">
        <p>© 2024 EchoShelf. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;