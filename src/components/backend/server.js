import express from 'express'
import cors from 'cors'
import dotenv from "dotenv"
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoutes.js'
import bookRouter from './routes/bookRoutes.js'

dotenv.config();

// App config
const app = express()
const port = process.env.PORT || 5174
connectDB();
connectCloudinary()

//middlewares
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173", // Frontend URL
}));

//api endpoints
app.use('/api/user',userRouter);
app.use('/api/book',bookRouter);

app.get('/',(req,res) => {
    res.send("API Working")
})

app.listen(port, ()=>console.log('Server started on PORT : ' + port))