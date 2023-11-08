export function ProductsIndex(props) {
  console.log(props.myProducts);
  return (
    <div id="products-index">
      <div className="header-all-products">
        <h2>All Movies/Shows</h2>
      </div>

      {props.myProducts.map((product) => (
        <div key={product.id} className="products">
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}
