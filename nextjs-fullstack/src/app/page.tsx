"use client";

import { trpc } from "./_trpc/client";

export default function Home() {
  const greeting = trpc.greeting.useQuery();
  const users = trpc.user.readAll.useQuery();

  return <div className="flex flex-col gap-3">
    <h1 className="text-2xl font-bold">{greeting.data ?? "No data"}</h1>
    <ul>
      {users.data?.map((user) => (
        <li key={user.id}>
          {user.firstName} ({user.email})
        </li>
      ))}
    </ul>
  </div>;
}
