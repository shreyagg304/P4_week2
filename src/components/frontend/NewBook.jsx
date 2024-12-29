import React, { useState, useEffect } from "react"; // Add useEffect import

const DonateNewBook = () => {
  const [newBook, setNewBook] = useState({
    id: "", // Will be set dynamically
    title: "",
    author: "",
    price: "",
    publisher: "",
    publishedDate: "",
    description: "",
    pageCount: "",
    image: "",
    genres: [],
  });

  const [books, setBooks] = useState([]);

  // Simulated books data (In a real app, you'd fetch this from a database or API)
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

  // Generate the next unique ID for the new book
  const generateNextId = () => {
    const maxId = books.reduce((max, book) => (book.id > max ? book.id : max), 0);
    return maxId + 1; // Return the next available ID
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "genres") {
      setNewBook({
        ...newBook,
        genres: value.split(", ").filter((genre) => genre.trim() !== ""),
      });
    } else {
      setNewBook({
        ...newBook,
        [name]: value,
      });
    }
  };

  const handleSubmitNewBook = (e) => {
    e.preventDefault();

    const {
      title,
      author,
      price,
      publisher,
      publishedDate,
      description,
      pageCount,
      image,
      genres,
    } = newBook;

    if (!title || !author || !price || !publisher || !publishedDate || !description || !pageCount || !image || genres.length === 0) {
      alert("Please fill out all fields!");
      return;
    }

    if (isNaN(price)) {
      alert("Price must be a valid number!");
      return;
    }

    if (isNaN(pageCount)) {
      alert("Page count must be a valid number!");
      return;
    }

    const newBookWithId = { ...newBook, id: generateNextId() };

    // Add the new book to the system (could also be sent to a server or API)
    setBooks([...books, newBookWithId]);

    console.log("New book submitted:", newBookWithId);

    alert("Thank you for donating your book!");
    setNewBook({
      title: "",
      author: "",
      price: "",
      publisher: "",
      publishedDate: "",
      description: "",
      pageCount: "",
      image: "",
      genres: [],
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-yellow-50">
      {/* Content Section */}
      <div className="flex-grow flex items-center justify-center">
        <section className="text-center p-4 w-full sm:w-3/4 lg:w-1/2">
          <h2 className="text-4xl font-semibold text-yellow-900 mb-4">
            Donate a New Book
          </h2>
          <form
            onSubmit={handleSubmitNewBook}
            className="mt-6 p-4 bg-white rounded shadow-lg"
          >
            <input
              type="text"
              name="title"
              value={newBook.title}
              onChange={handleInputChange}
              placeholder="Title"
              className="mb-2 p-2 border border-lime-500 rounded w-full"
            />
            <input
              type="text"
              name="author"
              value={newBook.author}
              onChange={handleInputChange}
              placeholder="Author"
              className="mb-2 p-2 border border-lime-500 rounded w-full"
            />
            <input
              type="text"
              name="price"
              value={newBook.price}
              onChange={handleInputChange}
              placeholder="Price"
              className="mb-2 p-2 border border-lime-500 rounded w-full"
            />
            <input
              type="text"
              name="publisher"
              value={newBook.publisher}
              onChange={handleInputChange}
              placeholder="Publisher"
              className="mb-2 p-2 border border-lime-500 rounded w-full"
            />
            <input
              type="date"
              name="publishedDate"
              value={newBook.publishedDate}
              onChange={handleInputChange}
              placeholder="Published Date"
              className="mb-2 p-2 border border-lime-500 rounded w-full"
            />
            <textarea
              name="description"
              value={newBook.description}
              onChange={handleInputChange}
              placeholder="Description"
              className="mb-2 p-2 border border-lime-500 rounded w-full"
            />
            <input
              type="text"
              name="pageCount"
              value={newBook.pageCount}
              onChange={handleInputChange}
              placeholder="Page Count"
              className="mb-2 p-2 border border-lime-500 rounded w-full"
            />
            <input
              type="text"
              name="image"
              value={newBook.image}
              onChange={handleInputChange}
              placeholder="Image URL"
              className="mb-2 p-2 border border-lime-500 rounded w-full"
            />
            {newBook.image && (
              <img
                src={newBook.image}
                alt="Book preview"
                className="w-32 h-32 mx-auto mb-4 object-cover rounded-md"
              />
            )}
            <input
              type="text"
              name="genres"
              value={newBook.genres.join(", ")}
              onChange={handleInputChange}
              placeholder="Genres (comma separated)"
              className="mb-2 p-2 border border-lime-500 rounded w-full"
            />
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mt-4"
            >
              Submit New Book
            </button>
          </form>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-yellow-900 text-white p-4 text-center">
        <p>© 2024 EchoShelf. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default DonateNewBook;
