import "./Product.css";

function Product({ title, price, features, features2 }) {
  return (
    <div className="Product">
      <h1>{title}</h1>
      <h3>Price: {price}</h3>
      <p>Features: {features.map((feature)=><li>{feature}</li>)}</p>
    </div>
  );
}

export default Product;
