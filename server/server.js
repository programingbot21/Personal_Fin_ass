// import events from 'events';
// events.EventEmitter.defaultMaxListeners = 20;
import express, { application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
// import transactionRoutes from "./routes/auth.js";

import usersTransactionRoutes from "./routes/Createauth.js"
// import transactionRoutes from "./routes/Createauth.js"


dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
// app.use("/api/transactions", transactionRoutes);



// users api
app.use("/api",usersTransactionRoutes)




// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

app.listen(7000, () => {
  console.log("Server running on port 7000");
});
