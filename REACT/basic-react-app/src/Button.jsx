function printHello() {
  console.log("Hello!");
}
function handleHover() {
  console.log("Hovered over me!");
}

export default function Button() {
  return (
    <div>
      <button onClick={printHello}>Click me!</button>
      <p onMouseOver={handleHover}>Hover over me!</p>
    </div>
  );
}
