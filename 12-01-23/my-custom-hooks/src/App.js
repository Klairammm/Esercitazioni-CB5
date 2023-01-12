import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./counter/components/counter/Counter";
import { Banks } from "./fetch/components/banks/Bank";
import { Beers } from "./fetch/components/beers/Beers";
import { BloodTypes } from "./fetch/components/blood-types/BloodTypes";
import { Users } from "./fetch/components/users/Users";
import { useState } from "react";

/*Creazione di un form -> select con options collegate ai nostri componenti [Counter, BloodTypes, etc.]*/

function ComponentSelector(props) {
  const { selectChangeHandler } = props;
  return (
    <form>
      <select defaultValue={""} onChange={selectChangeHandler}>
        <option selected disabled value="">
          Select a component to render
        </option>
        <option value="counter">Counter</option>
        <option value="bank">Random Bank Types</option>
        <option value="beer">Random Beer Types</option>
        <option value="blood-types">Random Blood Types</option>
        <option value="user">Random User Types</option>
      </select>
    </form>
  );
}

const componentMap = {
  counter: Counter,
  bloodTypes: BloodTypes,
  banks: Banks,
  users: Users,
  beers: Beers,
  default: "defaultComponent",
};

function App() {
  const [componentToRender, setComponentToRender] = useState("default");
  const selectChangeHandler = (event) => {
    console.log(event);
    setComponentToRender(event.target.value);
  };

  const defaultComponent = () => <div>Nothing selected</div>;

  const dynamicComponent = componentMap[componentToRender];

  return (
    <div className="App">
      <h1> Hello Users! </h1>

      <header className="App-header">
        <h2> Custom Hooks </h2>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>with React App</h2>
      </header>

      <ComponentSelector selectChangeHandler={selectChangeHandler} />

      <div>{componentToRender}</div>
      <dynamicComponent />

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
