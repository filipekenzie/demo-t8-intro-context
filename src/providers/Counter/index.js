import { createContext, useState } from "react";
import { useContext } from "react/cjs/react.development";

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const addNumber = () => {
    setCounter(counter + 1);
  };

  const subNumber = () => {
    setCounter(counter - 1);
  };

  return (
    <CounterContext.Provider value={{ counter, addNumber, subNumber }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);