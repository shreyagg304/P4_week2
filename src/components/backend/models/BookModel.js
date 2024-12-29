import mongoose from 'mongoose';

// Define the book schema
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: String, required: true },
    publisher: { type: String, required: true },
    publishedDate: { type: Date, required: true },
    description: { type: String, required: true },
    pageCount: { type: Number, required: true },
    image: { type: String, required: true }, // Image URL for the book cover
    genres: { type: [String], required: true }, // Array of genres
});

// Create the Book model using the schema
const Book = mongoose.model("Book", bookSchema);

export default Book;