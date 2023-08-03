import "./styles.css";
import { useEffect, useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, [count]);

  return (
    <>
      <h1> useState rendering {count}</h1>
    </>
  );
}
