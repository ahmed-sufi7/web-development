import "./App.css";
import Title from "./Title.jsx"



function Description() {
  return <h3>Hi, I'm Description!</h3>;
}

function App() {
  return (
    <div>
      <Title />
      <Description/>
    </div>
  );
}

export default App;
