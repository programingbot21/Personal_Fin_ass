"use client"; 

import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  const handleRegister = () => {
    alert("Registration successful!");
    router.push("/login"); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <input type="text" placeholder="Name" className="mb-2 px-4 py-2 border rounded" />
      <input type="text" placeholder="Email" className="mb-2 px-4 py-2 border rounded" />
      <input type="password" placeholder="Password" className="mb-4 px-4 py-2 border rounded" />
      <button onClick={handleRegister} className="px-4 py-2 bg-green-500 text-white rounded">
        Register
      </button>
    </div>
  );
}
