"use client";

import { Sidebar } from "@/Components/Sidebar/Sidebar";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", salary: 4000 },
  { name: "Feb", salary: 3000 },
  { name: "Mar", salary: 5000 },
  { name: "Apr", salary: 4000 },
  { name: "May", salary: 6000 },
];

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-semibold mb-4">Welcome Bank, john</h1>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-medium">Total Sales</h2>
            <p className="text-2xl font-bold">53,000</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-medium">New Clients</h2>
            <p className="text-2xl font-bold">3,082</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-medium">Satisfaction Rate</h2>
            <p className="text-2xl font-bold">95%</p>
          </div>
        </div>

        {/* Sales Overview Chart */}
        {/* <div className="mt-6 p-6 bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-lg font-medium mb-4">Sales Overview</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="gray" />
              <XAxis dataKey="name" stroke="white" />
              <YAxis stroke="white" />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#4F46E5" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div> */}
      </main>
    </div>
  );
}
