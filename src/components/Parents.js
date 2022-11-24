import React from "react";
import { createContext, useContext } from "react";
import Child from "./Child";
export function useMyContext() {
  return useContext(MyContext);
}
const MyContext = createContext("default value");
// provider 컴포넌트로 감싸는 것을 깜빡하면 'default value'가 나온다.

const Parents = () => {
  return (
    <div>
      <MyContext.Provider value="Hello World">
        <Child />
      </MyContext.Provider>
    </div>
  );
};

export default Parents;
