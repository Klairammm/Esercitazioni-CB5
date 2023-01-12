import { useEffect, useState } from "react";

export function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((n) => n + 1);
  const decrement = () => setCount((n) => n - 1);
  const reset = () => setCount(0);

  return { count, increment, decrement, reset }; // { count: count, ... }
}
