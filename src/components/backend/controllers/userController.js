import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/UserModel.js";

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

// Route for user login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(400).json({ success: false, message: "User doesn't exist" });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            // If passwords match, create and return token
            const token = createToken(user._id);
            return res.status(200).json({ success: true, token }); // Send token on successful login
        } else {
            return res.status(400).json({ success: false, message: "Invalid credentials" }); // Invalid password
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

// Route for user signup
const signupUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        console.log("Signup request received:", req.body);  // Log the request body

        // Checking if the user already exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            console.log("User already exists:", email);  // Log if the user exists
            return res.status(400).json({ success: false, message: "User already exists" });
        }

        // Validating email format and password strength
        if (!validator.isEmail(email)) {
            console.log("Invalid email format:", email);  // Log if the email is invalid
            return res.status(400).json({ success: false, message: "Please enter a valid email" });
        }

        if (password.length < 8) {
            console.log("Password is too short:", password);  // Log if the password is too short
            return res.status(400).json({ success: false, message: "Password must be at least 8 characters long" });
        }

        // Hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        console.log("Hashed password:", hashedPassword);  // Log the hashed password

        // Create new user and save to the database
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        });

        const user = await newUser.save();
        console.log("New user created:", user);  // Log the new user

        // Create a token for the new user
        const token = createToken(user._id);

        return res.status(201).json({ success: true, token });
    } catch (error) {
        console.log("Error during signup:", error);  // Log the error if it occurs
        return res.status(500).json({ success: false, message: error.message });
    }
};


export { loginUser, signupUser };
