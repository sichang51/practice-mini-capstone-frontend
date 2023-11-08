import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import axios from "axios";

export function Content() {
  let products = [];
  return (
    <div>
      <ProductsNew />
      <ProductsIndex myProducts={products} />
    </div>
  );
}
