'use client';

import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
  { month: 'Jan', sales: 4000 },
  { month: 'Feb', sales: 3000 },
  { month: 'Mar', sales: 5000 },
  { month: 'Apr', sales: 7000 },
  { month: 'May', sales: 6000 },
  { month: 'Jun', sales: 8000 },
  { month: 'Jul', sales: 9000 },
  { month: 'Aug', sales: 10000 },
  { month: 'Sep', sales: 7500 },
  { month: 'Oct', sales: 8500 },
  { month: 'Nov', sales: 9500 },
  { month: 'Dec', sales: 1000 },
];

export default function MonthWiseGraph() {
  return (
    <div className="min-h-screen p-6 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-4">Monthly Sales Overview</h1>
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="gray" />
            <XAxis dataKey="month" stroke="white" />
            <YAxis stroke="white" />
            <Tooltip contentStyle={{ backgroundColor: '#333', borderRadius: '5px' }} />
            <Line type="monotone" dataKey="sales" stroke="#4F46E5" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6">
        <table className="w-full border border-gray-700">
          <thead className="bg-gray-700">
            <tr>
              <th className="p-3 border border-gray-600">Month</th>
              <th className="p-3 border border-gray-600">Sales ($)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="odd:bg-gray-800 even:bg-gray-700">
                <td className="p-3 border border-gray-600 text-center">{item.month}</td>
                <td className="p-3 border border-gray-600 text-center">{item.sales}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
