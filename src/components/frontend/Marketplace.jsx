// Marketplace.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Marketplace() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGenres, setFilterGenres] = useState('All');
  const [cart, setCart] = useState([]);

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

  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterGenres === 'All' || book.genres.some((genre) => genre === filterGenres);
    return matchesSearch && matchesFilter;
  });

  const addToCart = (book) => {
    const updatedCart = [...cart, book];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert(`${book.title} has been added to your cart!`);
  };

  const donateBook = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
    alert('Thank you for donating!');
  };

  return (
    <div className="text-center p-8 bg-yellow-50">
      <section className="text-center p-4">
        <h2 className="text-4xl font-semibold text-yellow-900 mb-4">Marketplace</h2>
        <p className="text-xl text-gray-600 mb-4">Explore books available for purchase or donation:</p>
      </section>

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
            value={filterGenres}
            onChange={(e) => setFilterGenres(e.target.value)}
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

      <div>
        <p className="text-xl my-4">Books for Sale/Donation:</p>

        {/* Link to donate a new book */}
        <div className="m-8">
          <Link
            to="/newbook"
            className="bg-yellow-500 text-white py-3 px-6 rounded-lg shadow hover:bg-yellow-600"
          >
            <span className="sm:text-lg">Donate a New Book</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <div key={book.id}>
                <div className="max-w-sm bg-white rounded-lg shadow-lg p-4 m-4">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-48 object-cover rounded-md mb-2"
                  />
                  <h3 className="font-bold">{book.title}</h3>
                  <p>Price: {book.price}</p>
                  <p>Condition: {book.condition}</p>
                  <p>Genres: {book.genres.join(', ')}</p>
                  <p className="text-sm text-gray-500">
                    {book.isDonated ? 'Available for Donation' : 'For Sale'}
                  </p>

                  <div className="flex space-x-4 mt-4 justify-center">
                    {!book.isDonated && (
                      <button
                        onClick={() => addToCart(book)} // Add to cart
                        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                      >
                        Buy
                      </button>
                    )}
                    <button
                      onClick={() => donateBook(book.id)} // Donate book
                      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                      Donate
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No books match your criteria.</p>
          )}
        </div>

      </div>

      <footer className="bg-yellow-900 text-white p-4 text-center mt-8">
        <p>© 2024 EchoShelf. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Marketplace;
