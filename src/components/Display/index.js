// import { useContext } from "react";
// import { CounterContext } from "../../providers/Counter";

import { useCounter } from "../../providers/Counter";
import { useName } from "../../providers/Name";

const Display = () => {
  //   const { counter } = useContext(CounterContext);

  const { counter } = useCounter();
  const { name } = useName();

  return (
    <>
      <div>{name}</div>
      <div>{counter}</div>
    </>
  );
};

export default Display;
