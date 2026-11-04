import "./App.css";

function Title() {
  return <h1>Hi, I'm Title!</h1>;
}

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
