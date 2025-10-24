import { useState } from "react";
import "./App.css";
import { Button } from "./components";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Ferxo")

  const countMore = () => {
    setCount((count) => count + 1);
  };

  const changeNname = () => {
    setName("Fernando");
  };

  return (
    <>
      <div className="card">
        <Button label={`Count is ${count}`} parentMethod={countMore} />
        <p>{ name }</p>
        <Button label="Change name" parentMethod={changeNname}></Button>
      </div>
    </>
  );
}

export default App;
