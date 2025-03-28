import { Link } from "react-router-dom";

const PRODUCTS = [
  {
    id: "p1",
    title: "Product 1",
    price: 6,
    description: "This is a first product - amazing!",
  },
  {
    id: "p2",
    title: "Product 2",
    price: 5,
    description: "This is a second product - amazing!",
  },
  {
    id: "p3",
    title: "Product 3",
    price: 7,
    description: "This is a third product - amazing!",
  },
];

function ProductsPage() {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={product.id}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage;
