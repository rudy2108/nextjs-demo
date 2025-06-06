type MockUser = {
    id: number;
    name: string;   
}

export default async function MockUsers() {
    const res = await fetch("https://6842c243e1347494c31dd7ce.mockapi.io/users");
    const users = await res.json();
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Mock Users List</h1>
            <ul className="space-y-4">
                {users.map((user: MockUser) => (
                    <li key={user.id} className="border p-4 rounded">
                        <h2 className="text-xl font-semibold">{user.name}</h2>
                    </li>
                ))}
            </ul>
    </div>
);
}
