
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

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
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
      await API.post("/auth/register", formData);
      router.push("/login"); // Redirect after successful registration
    } catch (err) {
      setError(err.response?.data?.msg || "Registration failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField type="text" name="name" placeholder="Name" onChange={handleChange} />
          <InputField type="email" name="email" placeholder="Email" onChange={handleChange} />
          <InputField type="password" name="password" placeholder="Password" onChange={handleChange} />
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">
            Register
          </button>
        </form>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
