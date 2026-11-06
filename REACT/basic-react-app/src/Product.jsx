import "./Product.css";

function Product({ title, price, features }) {
    let isDiscount = price > 30000;
  let styles = { backgroundColor: isDiscount ? "pink" : "" };
  return (
    <div className="Product" style={styles}>
      <h1>{title}</h1>
      <h3>Price: {price}</h3>
      {isDiscount && <p>Discount 5%</p>}
    </div>
  );
}

export default Product;
