export function ProductsNew() {
  return (
    <div id="products-new">
      <div className="new-products">
        <h2>New Products</h2>
      </div>

      <form>
        <label>
          <input className="new-products-entry" type="text" placeholder="Enter new product here:" />
        </label>
      </form>
    </div>
  );
}
