import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Hello World!
        </h1>
        <button className="App-button" onClick={() => console.log("Hello World")}>CLICK ME</button>
      </header>
    </div>
  );
}

export default App;
