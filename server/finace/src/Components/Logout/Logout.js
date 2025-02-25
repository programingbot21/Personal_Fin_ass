"use client";

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from storage
    // router.push("/login"); // Redirect to login
  };

  useEffect(() => {
    handleLogout(); // Auto logout on page load
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-2xl font-bold mb-4">Logging Out...</h2>
        <p className="text-gray-600">You are being redirected to the login page.</p>
        <button
          onClick={handleLogout}
          className="mt-4 w-full bg-red-600 text-white p-2 rounded hover:bg-red-700 transition"
        >
          Logout Now
        </button>
      </div>
    </div>
  );
}
