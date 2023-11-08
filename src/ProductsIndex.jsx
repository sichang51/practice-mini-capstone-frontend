export function ProductsIndex(props) {
  console.log(props.myProducts);
  return (
    <div id="products-index">
      <div className="header-all-products">
        <h2>All Movies/Shows</h2>
      </div>
      {props.myProducts.map((post) => (
        <div key={post.id} className="products">
          <h3>{post.title}</h3>
          <img src={post.image} alt="" />
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
