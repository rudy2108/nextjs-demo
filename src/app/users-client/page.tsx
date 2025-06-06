"use client";
import { useState, useEffect } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

export default function UsersClient() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: User[] = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Users List</h1>
      <ul className="space-y-4">
        {users.map(user => (
          <li key={user.id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}