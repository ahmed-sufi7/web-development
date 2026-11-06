import Product from "./Product";

function ProductTab() {
  let options = ["hi-tech", "durable", "fast"];
  return (
    <>
      <Product title="phone" price={30000} features={options} />
      {/* <Product title="laptop" price={30000} />
      <Product title="pen" price={30000} /> */}
    </>
  );
}

export default ProductTab;
