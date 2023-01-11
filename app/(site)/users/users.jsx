import { getUsers } from "../../../lib/prisma/users";
import Link from "next/link";

const Users = async () => {
  const { users } = await getUsers();

  return (
    <section className="fixed h-full w-1/4 bg-stone-800">
      <div className="center py-4">
        <h2 className="mb-4 px-6 text-xl font-medium text-white">Users</h2>
        <ul className="flex flex-col px-6 text-sm text-white">
          {users?.map((user) => (
            <li key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Users;
