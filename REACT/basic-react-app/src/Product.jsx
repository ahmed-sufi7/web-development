import "./Product.css";
import Price from "./Price";

function Product({ title, idx }) {
  let oldPrices = ["12,458", "11,000", "1,500", "599"];
  let newPrices = ["8,999", "9,599", "899", "278"];
  let description = [
    "8,000 DPI",
    "Intutive surface",
    "Designed for ipad",
    "wireless",
  ];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[idx]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}

export default Product;
