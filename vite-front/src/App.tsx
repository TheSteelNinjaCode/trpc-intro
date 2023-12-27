import "./App.css";
import { trpc } from "./trpc/trpc";

function App() {
  // const users = trpc.user.readAll.useQuery();
  const products = trpc.product.readAll.useQuery();

  return (
    <>
      <ul>
        {products.data?.map((product) => (
          <li key={product.id}>
            {product.quantity.mul(product.price).toString()}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
