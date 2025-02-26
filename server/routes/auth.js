import express from "express";
import User from "../Model/Usermod.js";
import Transaction from "../Model/transaction.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: "User already exists" });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({ username, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ msg: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ msg: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Create a new transaction
router.post("/create", async (req, res) => {
  try {
    const { userId, amount, type } = req.body;

    // Validate user
    const user = await User.findById(userId);
    if (!user) return res.status(400).json({ msg: "User not found" });

    const transaction = new Transaction({ userId, amount, type });
    await transaction.save();

    res.status(201).json({ msg: "Transaction created successfully", transaction });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all transactions for a user
// router.get("/user/:userId", async (req, res) => {
//   try {
//     const { userId } = req.params;

//     const transactions = await Transaction.find({ userId });
//     res.status(200).json(transactions);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });


// Fetch all transactions
 
router.get("/transactions", async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
  } catch (error) {
    console.error("Error fetching transactions:", error);
    res.status(500).json({ msg: "Server error", error: error.message });
  }
});


//Add amount to a transaction

// router.put("/add/:transactionId", async (req, res) => {
//   try {
//     const { transactionId } = req.params;
//     const { amount } = req.body;

//     const transaction = await Transaction.findById(transactionId);
//     if (!transaction) return res.status(404).json({ msg: "Transaction not found" });

//     transaction.amount += amount;
//     await transaction.save();

//     res.status(200).json({ msg: "Amount added successfully", transaction });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });





// // Subtract amount from a transaction
// router.put("/subtract/:transactionId", async (req, res) => {
//   try {
//     const { transactionId } = req.params;
//     const { amount } = req.body;

//     const transaction = await Transaction.findById(transactionId);
//     if (!transaction) return res.status(404).json({ msg: "Transaction not found" });

//     transaction.amount -= amount;
//     await transaction.save();

//     res.status(200).json({ msg: "Amount subtracted successfully", transaction });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });


// Get all transactions
router.get("/transactions", async (req, res) => {
  try {
    const transactions = await Transaction.find(); // Fetch all transactions
    res.status(200).json(transactions);
  } catch (error) {
    console.error("Error fetching transactions:", error);
    res.status(500).json({ msg: "Server error", error: error.message });
  }
});




router.put("/add/:transactionId", async (req, res) => {
  try {
    const { transactionId } = req.params;
    const { amount } = req.body;

    if (typeof amount !== "number" || isNaN(amount)) {
      return res.status(400).json({ msg: "Invalid amount provided" });
    }

    const transaction = await Transaction.findById(transactionId);
    if (!transaction) {
      return res.status(404).json({ msg: "Transaction not found" });
    }

    transaction.amount += amount;
    transaction.updateCount = (transaction.updateCount || 0) + 1; // Track updates
    await transaction.save();

    res.status(200).json({ msg: "Amount added successfully", transaction });
  } catch (error) {
    console.error("Error adding amount:", error);
    res.status(500).json({ error: error.message });
  }
});


//  🔽 PUT: Subtract from transaction (Decrease amount)
 
router.put("/subtract/:transactionId", async (req, res) => {
  try {
    const { transactionId } = req.params;
    const { amount } = req.body;

    if (typeof amount !== "number" || isNaN(amount) || amount <= 0) {
      return res.status(400).json({ msg: "Invalid amount provided" });
    }

    const transaction = await Transaction.findById(transactionId);
    if (!transaction) {
      return res.status(404).json({ msg: "Transaction not found" });
    }

    if (transaction.amount < amount) {
      return res.status(400).json({ msg: "Insufficient funds in transaction" });
    }

    transaction.amount -= amount;
    transaction.updateCount = (transaction.updateCount || 0) + 1; // Track updates
    await transaction.save();

    res.status(200).json({ msg: "Amount subtracted successfully", transaction });
  } catch (error) {
    console.error("Error subtracting amount:", error);
    res.status(500).json({ error: error.message });
  }
});

 

  // update transaction

  // router.put("/update", async (req, res) => {
  //   try {
  //     console.log("Received Body:", req.body); // Debugging line
  
  //     const { updates } = req.body;
  
  //     if (!Array.isArray(updates) || updates.length === 0) {
  //       console.error("Invalid update request:", req.body);
  //       return res.status(400).json({ msg: "Invalid update request. Provide an array of updates." });
  //     }
  
  //     let updatedTransactions = [];
  
  //     for (const update of updates) {
  //       const { transactionId, amount } = update;
  
  //       if (!transactionId || typeof amount !== "number" || isNaN(amount)) {
  //         return res.status(400).json({ msg: "Invalid data in updates array" });
  //       }
  
  //       const transaction = await Transaction.findById(transactionId);
  //       if (!transaction) {
  //         continue; // Skip invalid transaction IDs
  //       }
  
  //       if (transaction.amount + amount < 0) {
  //         return res.status(400).json({ msg: `Transaction ${transactionId} has insufficient balance` });
  //       }
  
  //       transaction.amount += amount;
  //       transaction.updateCount = (transaction.updateCount || 0) + 1;
  //       await transaction.save();
  
  //       updatedTransactions.push(transaction);
  //     }
  
  //     res.status(200).json({
  //       msg: "Transactions updated successfully",
  //       updatedTransactions,
  //     });
  //   } catch (error) {
  //     console.error("Error updating transactions:", error);
  //     res.status(500).json({ error: error.message });
  //   }
  // });
  
  router.put("/update", async (req, res) => {
    try {
      console.log("Received request body:", req.body); // Debugging log
  
      // Ensure updates exist and are an array
      if (!req.body || typeof req.body !== "object") {
        return res.status(400).json({ msg: "Invalid request format. Expecting JSON." });
      }
  
      const { updates } = req.body;
  
      if (!Array.isArray(updates) || updates.length === 0) {
        return res.status(400).json({ msg: "Invalid update request. Provide an array of updates." });
      }
  
      // Fetch transactions in a single query
      const transactionIds = updates.map((u) => u.transactionId);
      const transactions = await Transaction.find({ _id: { $in: transactionIds } });
  
      // Create a map of transactions for quick lookup
      const transactionMap = new Map(transactions.map((tx) => [tx._id.toString(), tx]));
  
      let updatedTransactions = [];
  
      for (const { transactionId, amount } of updates) {
        if (!transactionId || typeof amount !== "number" || isNaN(amount)) {
          return res.status(400).json({ msg: "Invalid data in updates array" });
        }
  
        const transaction = transactionMap.get(transactionId);
        if (!transaction) continue; // Skip invalid transaction IDs
  
        // Update transaction
        transaction.amount += amount;
        transaction.updateCount = (transaction.updateCount || 0) + 1;
        await transaction.save();
        updatedTransactions.push(transaction);
      }
  
      res.status(200).json({
        msg: "Transactions updated successfully",
        updatedTransactions,
      });
    } catch (error) {
      console.error("Error updating transactions:", error);
      res.status(500).json({ error: error.message });
    }
  });
  
  

  router.get("/update-count/:transactionId", async (req, res) => {
    try {
      const { transactionId } = req.params;
      const transaction = await Transaction.findById(transactionId);
  
      if (!transaction) return res.status(404).json({ msg: "Transaction not found" });
  
      res.status(200).json({ msg: "Transaction update count", updateCount: transaction.updateCount || 0 });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  
   // Get all transactions and their update counts
   
  router.get("/all-updates", async (req, res) => {
    try {
      const transactions = await Transaction.find().select("userId amount type updateCount");
  
      res.status(200).json({
        msg: "All transactions with update counts",
        transactions,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


    //user
    router.get("/user/:userId", async (req, res) => {
      try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
    
        if (!user) return res.status(404).json({ msg: "User not found" });
    
        const transactions = await Transaction.find({ userId: user._id });
    
        res.json({ user, transactions });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
    
  
  

export default router;
