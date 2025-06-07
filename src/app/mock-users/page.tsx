import { revalidatePath } from "next/cache";

revalidatePath
type MockUser = {
  id: number;
  name: string;
};

async function addUser(formData: FormData) {
  "use server";
  const name = formData.get("name") as string;
  const response = await fetch("https://6842c243e1347494c31dd7ce.mockapi.io/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });
  const newUser = await response.json();
  revalidatePath("/mock-users");
  console.log(newUser);
}

export default async function MockUsers() {
  const res = await fetch("https://6842c243e1347494c31dd7ce.mockapi.io/users");
  const users = await res.json();


  return (
    <>
      <div className="py-10">
        <form action={ addUser } className="mb-4">
          <input
            type="text"
            name="name"
            required
            className="border p-1 rounded w-64"
          />
          <br />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded mt-1"
          >
            Add User
          </button>
        </form>
      </div>

      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Mock Users List</h1>
        <ul className="grid grid-cols-4 gap-4">
          {users.map((user: MockUser) => (
            <li key={user.id} className="border p-4 rounded">
              <h2 className="text-xl font-semibold">{user.name}</h2>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
