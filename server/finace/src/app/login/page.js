


"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import API from "@/utils/api";

// Reusable Input Component
const InputField = ({ type, name, placeholder, onChange }) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    onChange={onChange}
    className="w-full p-2 border rounded"
    required
  />
);

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  // Handle form changes
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset errors before submitting

    try {
      const res = await API.post("/auth/login", formData);
      localStorage.setItem("token", res.data.token); // Store token
      // router.push("/dashboard"); // Redirect after login
      router.push("/");
    } catch (err) {
      setError(err.response?.data?.msg || "Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField type="email" name="email" placeholder="Email" onChange={handleChange} />
          <InputField type="password" name="password" placeholder="Password" onChange={handleChange} />
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">
            Login
          </button>
        </form>

        <p className="text-center mt-4">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}

