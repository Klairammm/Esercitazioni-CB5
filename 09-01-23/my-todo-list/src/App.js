import logo from "./logo.svg";
import "./App.css";
import { TodoList } from "./components/todo-list/TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello User! This is your React</p>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
