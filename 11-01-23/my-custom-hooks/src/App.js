import logo from "./logo.svg";
import "./App.css";
import { Banks } from "./fetch/components/banks/Bank";
import { Beers } from "./fetch/components/beers/Beers";
import { BloodTypes } from "./fetch/components/blood-types/BloodTypes";
import { Users } from "./fetch/components/users/Users";

function App() {
  return (
    <div className="App">
      <h1> Hello Users! </h1>
      <h2> Custom Hooks </h2>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="fetch-call">
        <div className="div-banks">
          <Banks />
        </div>
        <div className="div-beers">
          <Beers />
        </div>
        <div className="div-blood-types">
          <BloodTypes />
        </div>
        <div className="div-users">
          <Users />
        </div>
      </section>
    </div>
  );
}

export default App;
