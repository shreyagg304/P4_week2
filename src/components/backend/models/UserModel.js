import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    cart: [{
      type: Object,
      default: {},  // Referencing Book model to store book IDs in the cart
    }],
  },{minimize:false}); 

const userModel = mongoose.models.user || mongoose.model('user',userSchema);

export default userModel;