import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// HOOKS BASICS

function App() {
  const [v, setV] = useState(11);
  // let  v = 11;

  const clicked = () => {
    console.log("mr hulk", Math.random());
    //  v = v+1 ;
    setV(v + 1);
    if (v >= 20) {
      prompt("can't go beyond 20");
      //setV(20)
    }
  };
  const clicked1 = () => {
    setV(v - 1);
    if (v <= 0) {
      setV(0);
      console.error("can't go below 0");
    }
  };

  return (
    <>
      <h1>ABHIJIT | HULK</h1>
      <h3>The Value Is {v}</h3>
      <button onClick={clicked}>increase value</button>
      <br />
      <br />
      <button onClick={clicked1}>decrease value</button>
      <br/>
      <br/>
      <button>testing</button>
    </>
  );
}

export default App;
