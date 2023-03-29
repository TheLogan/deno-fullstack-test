import { Button } from "../components/Button.tsx";
import { useState } from "preact/hooks";

interface CounterProps {
  start: number;
}

export default function (props: CounterProps) {
  const [count, setCount] = useState(props.start);

  return (
    <>
      click buttons
      <p>{count}</p>
      <Button onClick={() => setCount(count - 1)}>-1</Button>
      <Button onClick={() => setCount(count + 1)}>+1</Button>
    </>
  )
}