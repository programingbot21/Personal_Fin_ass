import mongoose from "mongoose";

const CreateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  balance: {
    type: Number,
    default: 0 // Store user's money balance
  }
});

// Check if the model already exists before defining it
const User1 = mongoose.models.User || mongoose.model("User", CreateSchema);

export default User1;