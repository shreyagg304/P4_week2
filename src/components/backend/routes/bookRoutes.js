import express from 'express';
import { addBook, listBook, removeBook, singleBook, updateBook, searchByGenre } from '../controllers/bookController.js';

const bookRouter = express.Router();

// Route to add a new book
bookRouter.post('/add', addBook); // Simply call addBook function without file handling

// Other routes for listing, removing, and viewing single books (you can implement these later)
bookRouter.get('/list', listBook);
bookRouter.post('/remove', removeBook);
bookRouter.get('/single/:id', singleBook); // Single book route to fetch a book by its _id
bookRouter.put('/update', updateBook);
bookRouter.get('/search', searchByGenre);

export default bookRouter;
