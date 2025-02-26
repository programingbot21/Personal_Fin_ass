

// "use client";
// import { useState, useEffect } from "react";
// import API from "@/utils/api";

// export default function UserManagement() {
//   const [users, setUsers] = useState([]);
//   const [formData, setFormData] = useState({ name: "", email: "", balance: 0 });
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [transactionData, setTransactionData] = useState({ amount: "", type: "add" });

//   // Fetch users
//   useEffect(() => {
//     const fetchUsers = async () => {
//       const res = await API.get("/users");
//       setUsers(res.data);
//     };
//     fetchUsers();
//   }, []);

//   // Handle input change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   //Create or Update User
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (selectedUser) {
//       await API.put(`/users/${selectedUser._id}`, formData);
//     } else {
//       await API.post("/users/create", formData);
//     }
//     window.location.reload();
//   };

//   // Delete User
//   const handleDelete = async (userId) => {
//     await API.delete(`/users/${userId}`);
//     window.location.reload();
//   };

//   // Handle Transaction
//   const handleTransaction = async () => {
//     await API.post(`/transactions/${transactionData.type}`, {
//       userId: selectedUser._id,
//       amount: Number(transactionData.amount),
//     });
//     window.location.reload();
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold text-center mb-4">User Management</h2>

//         {/* User Form */}
//         <form onSubmit={handleSubmit} className="space-y-4">
        
//           <input
//             type="text"
//             name="name"
//             placeholder="User Name"
//             className="w-full p-2 border rounded"
//             onChange={handleChange}
//             value={formData.name}
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             className="w-full p-2 border rounded"
//             onChange={handleChange}
//             value={formData.email}
//             required
//           />
//           <input
//             type="number"
//             name="balance"
//             placeholder="Initial Balance"
//             className="w-full p-2 border rounded"
//             onChange={handleChange}
//             value={formData.balance}
//             required
//           />
//           <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
//             {selectedUser ? "Update User" : "Create User"}
//           </button>
//         </form>

//         {/* User List */}
//         <h3 className="text-xl font-bold text-center mt-6">Users</h3>
//         <ul className="space-y-2 mt-4">
//           {users.map((user) => (
//             <li key={user._id} className="p-2 border rounded bg-gray-50 flex justify-between">
//               <span>
//                 {user.name} - ${user.balance}
//               </span>
//               <div>
//                 <button onClick={() => setSelectedUser(user)} className="text-blue-500 mx-2">Edit</button>
//                 <button onClick={() => handleDelete(user._id)} className="text-red-500">Delete</button>
//               </div>
//             </li>
//           ))}
//         </ul>

//         {/* Transaction Form */}
//         {selectedUser && (
//           <div className="mt-6">
//             <h3 className="text-xl font-bold text-center">Manage Balance</h3>
//             <input
//               type="number"
//               name="amount"
//               placeholder="Amount"
//               className="w-full p-2 border rounded mt-2"
//               onChange={(e) => setTransactionData({ ...transactionData, amount: e.target.value })}
//               required
//             />
//             <select
//               className="w-full p-2 border rounded mt-2"
//               onChange={(e) => setTransactionData({ ...transactionData, type: e.target.value })}
//             >
//               <option value="add">Add Money</option>
//               <option value="subtract">Subtract Money</option>
//             </select>
//             <button onClick={handleTransaction} className="w-full bg-green-600 text-white p-2 rounded mt-2">
//               Process Transaction
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


"use client";
import { useState, useEffect } from "react";
import API from "@/utils/api";

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [transactions, setTransactions] = useState({});
  const [formData, setFormData] = useState({ name: "", email: "", balance: 0 });
  const [selectedUser, setSelectedUser] = useState(null);
  const [transactionData, setTransactionData] = useState({ amount: "", type: "add" });

  // Fetch users on mount
  useEffect(() => {
    fetchUsers();
  }, []);

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const res = await API.get("/users");
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Fetch transactions for a user
  const fetchTransactions = async (userId) => {
    try {
      const res = await API.get(`/transactions/${userId}`);
      setTransactions((prev) => ({ ...prev, [userId]: res.data }));
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Create or Update User
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedUser) {
        await API.put(`/users/${selectedUser._id}`, formData);
      } else {
        await API.post("/users/create", formData);
      }
      setSelectedUser(null);
      setFormData({ name: "", email: "", balance: 0 });
      fetchUsers(); // Refresh user list
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  // Delete User
  const handleDelete = async (userId) => {
    try {
      await API.delete(`/users/${userId}`);
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // Handle Transaction
  const handleTransaction = async () => {
    if (!selectedUser) return;
    try {
      await API.post(`/transactions/${transactionData.type}`, {
        userId: selectedUser._id,
        amount: Number(transactionData.amount),
      });
      fetchUsers(); // Refresh user list
      fetchTransactions(selectedUser._id); // Refresh transactions
    } catch (error) {
      console.error("Error processing transaction:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-4">User Management</h2>

        {/* User Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="User Name"
            className="w-full p-2 border rounded"
            onChange={handleChange}
            value={formData.name}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
            onChange={handleChange}
            value={formData.email}
            required
          />
          <input
            type="number"
            name="balance"
            placeholder="Initial Balance"
            className="w-full p-2 border rounded"
            onChange={handleChange}
            value={formData.balance}
            required
          />
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
            {selectedUser ? "Update User" : "Create User"}
          </button>
        </form>

        {/* User List */}
        <h3 className="text-xl font-bold text-center mt-6">Users</h3>
        <ul className="space-y-2 mt-4">
          {users.map((user) => (
            <li key={user._id} className="p-2 border rounded bg-gray-50">
              <div className="flex justify-between">
                <span className="font-bold">{user.name}</span>
                <span className="text-sm text-gray-600">{user.email}</span>
              </div>
              <span className="text-sm font-bold">${user.balance}</span>
              <div className="flex justify-between mt-2">
                <button
                  onClick={() => {
                    setSelectedUser(user);
                    setFormData({ name: user.name, email: user.email, balance: user.balance });
                  }}
                  className="text-blue-500 mx-2"
                >
                  Edit
                </button>
                <button onClick={() => handleDelete(user._id)} className="text-red-500">
                  Delete
                </button>
                <button onClick={() => fetchTransactions(user._id)} className="text-green-500">
                  View Transactions
                </button>
              </div>

              {/* Transaction List */}
              {transactions[user._id] && (
                <div className="mt-2 bg-gray-200 p-2 rounded">
                  <h4 className="text-sm font-bold">Transactions:</h4>
                  <ul className="text-xs">
                    {transactions[user._id].map((t) => (
                      <li key={t._id} className={`mt-1 ${t.type === "add" ? "text-green-600" : "text-red-600"}`}>
                        {t.type === "add" ? "+" : "-"}${t.amount}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Transaction Form */}
        {selectedUser && (
          <div className="mt-6">
            <h3 className="text-xl font-bold text-center">Manage Balance</h3>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              className="w-full p-2 border rounded mt-2"
              onChange={(e) => setTransactionData({ ...transactionData, amount: e.target.value })}
              required
            />
            <select
              className="w-full p-2 border rounded mt-2"
              onChange={(e) => setTransactionData({ ...transactionData, type: e.target.value })}
            >
              <option value="add">Add Money</option>
              <option value="subtract">Subtract Money</option>
            </select>
            <button onClick={handleTransaction} className="w-full bg-green-600 text-white p-2 rounded mt-2">
              Process Transaction
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
