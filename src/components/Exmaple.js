import React, { createContext, useContext, useState } from "react";

const CounterContext = createContext();
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
  return value;
}

// components
function Value() {
  const [counter] = useCounterState(); // 상태 값 (Context API)
  return <h1>{counter}</h1>;
}
function Buttons() {
  const [counter, setCounter] = useCounterState(); // 상태 값 (Context API)으로 useState처럼 활용
  const increase = () => setCounter((prev) => prev + 1);
  const decrease = () => setCounter((prev) => prev - 1);
  return (
    <div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <div>{counter}</div>
    </div>
  );
}

const ChangeState = () => {
  // 최종(본체)
  return (
    <CounterProvider>
      <div>
        <Value />
        <Buttons />
      </div>
    </CounterProvider>
  );
};

export default ChangeState;
