"use client";

import { trpc } from "./_trpc/client";

export default function Home() {
  const greeting = trpc.greeting.useQuery();
  const users = trpc.user.readAll.useQuery();
  const products = trpc.product.readAll.useQuery();

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-bold">{greeting.data ?? "No data"}</h1>
      <ul>
        {users.data?.map((user) => (
          <li key={user.id}>
            {user.name} - ({user.email})
          </li>
        ))}
      </ul>

      <ul>
        {products.data?.map((product) => (
          <li key={product.id}>
            {product.name} - ({product.price.toString()})
            <br />
            Total: {product.price.mul(product.quantity).toString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
