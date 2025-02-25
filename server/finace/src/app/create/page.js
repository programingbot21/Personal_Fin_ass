"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import API from "@/utils/api";

export default function CreateTransaction() {
  const router = useRouter();
  const [userId, setUserId] = useState(null);
  const [formData, setFormData] = useState({ amount: "", type: "income" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Fetch user ID from localStorage or API
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("us"));
    if (storedUser?.id) {
      setUserId(storedUser.id);
    } else {
      setError("User not logged in");
    }
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userId) {
      setError("User ID not found. Please login.");
      return;
    }

    try {
      const res = await API.post("/transactions/create", { userId, ...formData });
      setMessage(res.data.msg);
      setError("");
      setFormData({ amount: "", type: "income" }); // Reset form
    } catch (err) {
      setError(err.response?.data?.msg || "Transaction failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Create Transaction</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}
        {message && <p className="text-green-500 text-center">{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            className="w-full p-2 border rounded"
            onChange={handleChange}
            value={formData.amount}
            required
          />
          <select
            name="type"
            className="w-full p-2 border rounded"
            onChange={handleChange}
            value={formData.type}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
            Create Transaction
          </button>
        </form>
      </div>
    </div>
  );
}
