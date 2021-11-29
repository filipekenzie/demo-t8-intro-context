// import { useContext } from "react";
// import { CounterContext } from "../../providers/Counter";

import { useCounter } from "../../providers/Counter";
import { useName } from "../../providers/Name";

const Counter = () => {
  //   const { addNumber, subNumber } = useContext(CounterContext);

  const { addNumber, subNumber } = useCounter();
  const { setName } = useName();

  return (
    <>
      <input onChange={(e) => setName(e.target.value)} />
      <button onClick={addNumber}>Add +</button>
      <button onClick={subNumber}>Add -</button>
    </>
  );
};

export default Counter;
