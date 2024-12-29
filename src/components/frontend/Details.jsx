import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();  // Get the book ID from the URL
  const [book, setBook] = useState(null);

  // Fetch book details based on the ID
  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch('/bookData.json');
        if (!response.ok) {
          throw new Error('Failed to fetch book details');
        }
        const data = await response.json();
        const bookDetails = data.find(book => book.id === parseInt(id));
        setBook(bookDetails);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails();
  }, [id]);  // Rerun the effect when the book ID changes

  // Render loading if book data is not available
  if (!book) {
    return <div>Loading...</div>;
  }

  const addToCart = (book) => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    storedCart.push(book); // Add the book to the cart array
    localStorage.setItem('cart', JSON.stringify(storedCart)); // Store the updated cart in localStorage
  };

  return (
    <div className="min-h-screen bg-yellow-50">
      <section className="p-8 text-center">
        <div className="flex flex-col md:flex-row w-full justify-center items-center space-y-6 md:space-x-10 md:space-y-0">
          <img
            src={book.image}
            alt={book.title}
            className="w-full max-w-lg h-auto object-contain mb-4 md:mb-0 md:max-w-md"
          />
          <div className="flex flex-col justify-center text-left md:w-1/2 space-y-4">
            <h2 className="text-4xl font-bold text-yellow-900">{book.title}</h2>
            <p className="text-xl text-gray-900 font-semibold">By {book.author}</p>
            <p className="text-lg text-gray-700">{book.description}</p>
            <p className="text-lg text-gray-700">Genre : {book.genres.join(', ')}</p>
            <p className="text-lg text-gray-700">Publisher : {book.publisher}</p>
            <p className="text-lg text-gray-700">Published Date : {book.publishedDate}</p>
            <p className="text-lg text-gray-700">Page count : {book.pageCount}</p>
            <p className="font-bold text-yellow-900 text-xl">Price : {book.price}</p>
            <button
              onClick={() => addToCart(book)} // Add book to cart on button click
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-yellow-800 focus:ring"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-yellow-900 text-white p-4 text-center mt-8">
        <p>© 2024 EchoShelf. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Details;
