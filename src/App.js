import { createContext, useContext } from "react";
import "./App.css";
import Parents from "./components/Parents";
const MyContext = createContext();
export default function App() {
  return (
    <div>
      <MyContext.Provider value="hello world">
        <Parents />
      </MyContext.Provider>
    </div>
  );
}

export function useMyContext() {
  return useContext(MyContext);
}
