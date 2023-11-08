import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";

export function Content() {
  let products = [{ name: "name", price: 25, description: "asdfasd" }];
  return (
    <div>
      <ProductsNew />
      <ProductsIndex myProducts={products} />
    </div>
  );
}
