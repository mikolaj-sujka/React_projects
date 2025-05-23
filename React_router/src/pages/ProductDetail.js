import { Link, useParams } from "react-router-dom";

function ProductDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>Product Detail Page</h1>
      <p>{params.productId}</p>
      <p>
        <Link to="..">Back</Link>
      </p>
    </>
  );
}

export default ProductDetailPage;
