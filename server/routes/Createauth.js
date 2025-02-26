import express from "express";


// import Transaction from "../models/Transaction";
// import Transaction from "../models/transaction";
import User1 from "../Model/createuser.js";
import Transaction from "../Model/transaction.js";

const router = express.Router();

// Create User
router.post("/users/create", async (req, res) => {
  try {
    const user = new User1(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get All Users
router.get("/users", async (req, res) => {
  const users = await User1.find();
  res.json(users);
});

// Update User
router.put("/users/:userId", async (req, res) => {
  const updatedUser = await User1.findByIdAndUpdate(req.params.userId, req.body, { new: true });
  res.json(updatedUser);
});

// Delete User
router.delete("/users/:userId", async (req, res) => {
  await User1.findByIdAndDelete(req.params.userId);
  res.json({ msg: "User deleted" });
});

// Add/Subtract Money
router.post("/transactions/:type", async (req, res) => {
  try {
    const { userId, amount } = req.body;
    const user = await User1.findById(userId);

    if (!user) return res.status(404).json({ msg: "User not found" });

    if (req.params.type === "add") user.balance += amount;
    else if (req.params.type === "subtract") user.balance -= amount;

    await user.save();

    const transaction = new Transaction({ userId, amount, type: req.params.type });
    await transaction.save();

    res.json({ msg: "Transaction successful", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get User Transactions
router.get("/transactions/:userId", async (req, res) => {
  const transactions = await Transaction.find({ userId: req.params.userId });
  res.json(transactions);
});

export default router;
