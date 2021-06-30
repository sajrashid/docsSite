import React from "react";
import ReactDOM from "react-dom";
import Table from "react-dj-table";
import cars from "./data.json";

function App() {
  const options = {
    tableCss: "table-fixed cursor-pointer w-full",
  };
  return (
    <div className="App">
      <Table json={cars} options={options} />
      <h1>Well, yeah.</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
