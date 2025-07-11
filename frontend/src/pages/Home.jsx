import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the local JSON file
    fetch("http://localhost:5000/products")
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className=" p-4 grid md:grid-cols-3 xl:grid-cols-4  container mx-auto items-center justify-center gap-2">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
