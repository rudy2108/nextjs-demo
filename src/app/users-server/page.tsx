type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

export default async function UsersServer() {
  await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate delay
  let users: User[] = [];
  let loading = true;
  let error = "";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    users = await response.json();
  } catch (err) {
    console.error("Failed to fetch users:", err);
    error = "Failed to load users";
  } finally {
    loading = false;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
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