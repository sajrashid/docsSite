import React from "react";
import ReactDOM from "react-dom";
import Table from "react-dj-table";

function App() {
  const json = [
    { id: 0, name: "snowy", age: 4, desc: "fluffy", isParent: true },
    { id: 1, name: "felix", age: 2, desc: "tricky", isParent: false }
  ];

  return (
    <div className="App">
      <Table json={json} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
