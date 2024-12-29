import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/UserModel.js";


const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

//Route for user login
const loginUser = async (req, res) => {
    try {

        const {email, password} = req.body;

        // Find user by email
        const user = await userModel.findOne({email});

        if (!user) {
            return res.json({success:false, message:"User doesn't exist"});
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            // If passwords match, create and return token
            const token = createToken(user._id);
            return res.json({success:true, token}); // Send token on successful login
        } else {
            return res.json({success:false, message:"Invalid credentials"}); // Invalid password
        }
 
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message});
    }
};


//Route for user signup
const signupUser = async (req, res) => {
    try{

        const {name, email, password} = req.body;

        //chechking user already exists or not
        const exists = await userModel.findOne({email});
        if (exists) {
            return res.json({success: false, message:"User already exists"})
        }

        //validating email format & string password
        if (!validator.isEmail(email)) {
            return res.json({success:false, message:"Please enter a valid email"})
        }
        if (password.length < 8) {
            return res.json({success:false, mmessage:"Please enter a strong password"})
        }

        //hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser = new userModel({
            name,
            email,
            password:hashedPassword
        })

        const user = await newUser.save()

        const token = createToken(user._id)

        res.json({success:true, token})

    }catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }
}

//Route for admin login
const adminLogin = async (req, res) => {

}

export {loginUser, signupUser, adminLogin}