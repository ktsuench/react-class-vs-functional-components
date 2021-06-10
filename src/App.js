import React from "react";
import ItemAppClassComponent from "./component/class/ItemApp";
import ItemAppFnComponent from "./component/functional/ItemApp";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Class Component implementation</h1>
      <ItemAppClassComponent />
      <h1>Functional Component implementation</h1>
      <ItemAppFnComponent />
    </div>
  );
}

export default App;
