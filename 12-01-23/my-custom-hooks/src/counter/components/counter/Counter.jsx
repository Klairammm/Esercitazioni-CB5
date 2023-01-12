import "./counter.css";
import { useCounter } from "../../hooks/use-counter";

export function Counter() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <section className={"Counter"}>
      <h2>Counter</h2>
      <div>
        <button onClick={decrement}>-1</button>
        <output>{count}</output>
        <button onClick={increment}>+1</button>
      </div>
      <button onClick={reset}>Reset</button>
    </section>
  );
}
