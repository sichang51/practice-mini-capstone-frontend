import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import axios from "axios";
import { useState, useEffect } from "react";

export function Content() {
  const [products, setProducts] = useState([]);

  const handleIndexProducts = () => {
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  useEffect(handleIndexProducts, []);

  return (
    <div>
      <ProductsNew />
      <button onClick={handleIndexProducts}>Load Products</button>
      <ProductsIndex myProducts={products} />
    </div>
  );
}
