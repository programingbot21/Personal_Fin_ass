'use client';
import { useState, useEffect } from "react";
import API from "@/utils/api";

export default function TransactionPage() {
  const [user, setUser] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [formData, setFormData] = useState({ amount: "", type: "income" });
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUserData();
  }, []);

  // Fetch User Details & Transactions
  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await API.get("/user", { headers: { Authorization: `Bearer ${token}` } });
      setUser(res.data.user);
      setTransactions(res.data.transactions);
    } catch (err) {
      setError("Failed to fetch user data");
    }
  };

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit Transaction
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await API.post("/transaction/create", { ...formData, userId: user?._id }, { headers: { Authorization: `Bearer ${token}` } });
      fetchUserData(); // Refresh data after transaction
    } catch (err) {
      setError("Transaction failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Transactions</h2>
        
        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* User Details */}
        {user && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold">User Details</h3>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Savings:</strong> ${user.savings}</p>
          </div>
        )}

        {/* Transaction Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="number" name="amount" placeholder="Amount" className="w-full p-2 border rounded" onChange={handleChange} required />
          <select name="type" className="w-full p-2 border rounded" onChange={handleChange}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Add Transaction</button>
        </form>

        {/* Transaction History */}
        <h3 className="text-lg font-semibold mt-6">Transaction History</h3>
        <ul className="mt-2">
          {transactions.map((tx, index) => (
            <li key={index} className="p-2 border-b">
              {tx.type === "income" ? "💰 Income" : "💸 Expense"}: ${tx.amount}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
