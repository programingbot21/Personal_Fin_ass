import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "us",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      enum: ["income", "expense"], // Restrict type values
      required: true,
    },
    // category: {
    //   type: String,
    //   required: true,
    // },
    date: {
      type: Date,
      default: Date.now,
    },
      updateCount: {
    type: Number,
    default: 0, // Track number of times updated
  },
  },
  { timestamps: true }
);

// Prevent model overwrite in Next.js
const Transaction = mongoose.models.Transaction || mongoose.model("Transaction", TransactionSchema);

export default Transaction;


// import mongoose from "mongoose";

// const TransactionSchema = new mongoose.Schema({
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "us",
//     required: true,
//   },
//   amount: {
//     type: Number,
//     required: true,
//   },
//   type: {
//     type: String,
//     // enum: ["credit", "debit"],
//     required: true,
//   },
//   date: {
//     type: Date,
//     default: Date.now,
//   },
//   updateCount: {
//     type: Number,
//     default: 0, // Track number of times updated
//   },
// //   category: {
// //     type: String,
// //     required: true,
// //   },
// });

// const Transaction = mongoose.model("Transaction", TransactionSchema);

// export default Transaction;
