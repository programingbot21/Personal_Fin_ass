// "use client";
// import { useState, useEffect } from "react";
// import API from "@/utils/api";

// export default function CreateTransaction() {
//   const [userId, setUserId] = useState("");
//   const [formData, setFormData] = useState({ amount: "", type: "income" });
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   // Fetch user ID from MongoDB
//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const res = await API.get("/user/:userId"); // Assuming an API exists to get logged-in user
//         setUserId(res.data._id); // Store userId
//       } catch (err) {
//         setError("Failed to fetch user");
//       }
//     };

//     fetchUser();
//   }, []);

//   // Handle Input Change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle Form Submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await API.post("/transactions/create", { userId, ...formData });
//       setMessage(res.data.msg);
//       setError("");
//     } catch (err) {
//       setError(err.response?.data?.msg || "Transaction failed");
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold text-center mb-4">Create Transaction</h2>

//         {/* Show Messages */}
//         {message && <p className="text-green-500 text-center">{message}</p>}
//         {error && <p className="text-red-500 text-center">{error}</p>}

//         {/* Transaction Form */}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="number"
//             name="amount"
//             placeholder="Amount"
//             className="w-full p-2 border rounded"
//             onChange={handleChange}
//             required
//           />
//           <select name="type" className="w-full p-2 border rounded" onChange={handleChange}>
//             <option value="income">Income</option>
//             <option value="expense">Expense</option>
//           </select>
//           <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
//             Create Transaction
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }


"use client";
import { useEffect, useState } from "react";
import API from "@/utils/api"; // Ensure this is correctly set up for API requests

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState([]);
  const [userId, setUserId] = useState(""); // Store userId dynamically
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserAndTransactions = async () => {
      try {
        // Fetch logged-in user details
        const userRes = await API.get("/user/userId"); // Adjust API route as needed
        const fetchedUserId = userRes.data._id;
        setUserId(fetchedUserId);

        // Fetch transactions based on userId
        const transactionRes = await API.get(`/user/${fetchedUserId}`);
        setTransactions(transactionRes.data);
      } catch (err) {
        setError("Failed to load user and transactions.");
      }
    };

    fetchUserAndTransactions();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">User Transactions</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        {transactions.length > 0 ? (
          <ul className="space-y-2">
            {transactions.map((transaction) => (
              <li key={transaction._id} className="p-2 border rounded bg-gray-50">
                <p><strong>Amount:</strong> ${transaction.amount}</p>
                <p><strong>Type:</strong> {transaction.type}</p>
                <p><strong>Date:</strong> {new Date(transaction.date).toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 text-center">No transactions found.</p>
        )}
      </div>
    </div>
  );
}
