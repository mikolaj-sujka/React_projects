import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/products");
  }

  return (
    <div>
      <h1>Home Page</h1>
      <p>
        Go to <Link to="/products">the list of products</Link>
      </p>
      <button onClick={navigateHandler}>Go to Products</button>
    </div>
  );
  /* The Link component is used to create a link to another page in the application. And does not send 
  HTTP request */
}

export default HomePage;
