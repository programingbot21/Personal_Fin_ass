"use client"; // Required for event handling

import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    // Simulate login
    alert("Login successful!");
    router.push("/"); // Redirect to Home after login
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <input type="text" placeholder="Email" className="mb-2 px-4 py-2 border rounded" />
      <input type="password" placeholder="Password" className="mb-4 px-4 py-2 border rounded" />
      <button onClick={handleLogin} className="px-4 py-2 bg-blue-500 text-white rounded">
        Login
      </button>
    </div>
  );
}
