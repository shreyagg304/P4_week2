import Book from '../models/BookModel.js';  // Assuming your Book model is in 'bookModel.js'

const addBook = async (req, res) => {
    try {
        const { title, author, price, publisher, publishedDate, description, pageCount, genres, image } = req.body;

        // Ensure that the image URL is provided
        if (!image) {
            return res.status(400).json({ message: 'Image URL is required' });
        }

        // Ensure that genres is an array
        if (!Array.isArray(genres)) {
            return res.status(400).json({ message: 'Genres must be an array' });
        }

        // Create a new book document using the data from the request
        const newBook = new Book({
            title,
            author,
            price,
            publisher,
            publishedDate,
            description,
            pageCount,
            genres,
            image, // Store the image URL
        });

        // Save the new book to the database
        await newBook.save();

        // Return a success response with the new book data
        res.status(201).json({
            message: 'Book added successfully',
            book: newBook,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};


// List all books
const listBook = async (req, res) => {
    try {
        // Fetch all books from the database
        const books = await Book.find();

        // If no books are found, return a message
        if (books.length === 0) {
            return res.status(404).json({ message: 'No books found' });
        }

        // Return the books
        res.status(200).json({
            message: 'Books retrieved successfully',
            books: books, // This will return an array of all the books
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Remove a book
const removeBook = async (req, res) => {
    try {
        const { id } = req.body; // Assuming the book ID is sent in the body

        // Check if the ID is provided
        if (!id) {
            return res.status(400).json({ message: 'Book ID is required' });
        }

        // Find and delete the book by its ID
        const deletedBook = await Book.findByIdAndDelete(id);

        // If the book was not found, return a 404 error
        if (!deletedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }

        // Return success response
        res.status(200).json({ message: 'Book removed successfully', book: deletedBook });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Get details of a single book
const singleBook = async (req, res) => {
    try {
        const { id } = req.params;  // Assuming you're passing the book ID as a URL parameter

        // Find the book by ID
        const book = await Book.findById(id);  

        // If the book doesn't exist, send a 404 error
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        // Return the book details
        res.status(200).json({ book });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const updateBook = async (req, res) => {
    try {
        const { id } = req.body; // Book ID to update
        const updates = req.body; // Fields to update

        // Find the book by ID and update it
        const updatedBook = await Book.findByIdAndUpdate(id, updates, { new: true });

        if (!updatedBook) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.status(200).json({
            message: "Book updated successfully",
            book: updatedBook,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

const searchByGenre = async (req, res) => {
    try {
        const { genre } = req.query; // Get genre from query parameters

        if (!genre) {
            return res.status(400).json({ message: "Genre is required" });
        }

        // Search books where genres array contains the specified genre
        const books = await Book.find({ genres: genre });

        if (books.length === 0) {
            return res.status(404).json({ message: "No books found for the specified genre" });
        }

        res.status(200).json({
            message: `Books found for genre: ${genre}`,
            books,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};


export { listBook, addBook, removeBook, singleBook, updateBook, searchByGenre };
