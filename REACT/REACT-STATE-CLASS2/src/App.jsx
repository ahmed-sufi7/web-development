import "./App.css";
import Lottery from "./Lottery";
import LudoBoard from "./LudoBoard";
import Ticket from "./Ticket";
import TodoList from "./TodoList";


function App() {
  return (
    <>
      <Lottery n={3} winningSum={15}/>
    </>
  );
}

export default App;
