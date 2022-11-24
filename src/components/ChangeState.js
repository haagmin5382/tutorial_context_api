import React, { createContext, useContext, useState } from "react";

const CounterContext = createContext();
const ChangeState = () => {
  return (
    <CounterProvider>
      <div>
        <Value />
        <Buttons />
      </div>
    </CounterProvider>
  );
};

function Value() {
  const [counter] = useCounterState();
  return <h1>{counter}</h1>;
}
function Buttons() {
  const [, setCounter] = useCounterState();
  const increase = () => setCounter((prev) => prev + 1);
  const decrease = () => setCounter((prev) => prev - 1);
  return (
    <div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

function CounterProvider({ children }) {
  const counterState = useState(1);
  return (
    <CounterContext.Provider value={counterState}>
      {children}
    </CounterContext.Provider>
  );
}
function useCounterState() {
  const value = useContext(CounterContext);
  if (value === undefined) {
    throw new Error("useCounterState should be used within CounterProvider");
  }
  return value;
}

export default ChangeState;
