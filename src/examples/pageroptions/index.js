import "semantic-ui-css/semantic.min.css";
import "./pager.css";

import React from "react";
import ReactDOM from "react-dom";
import Table from "react-dj-table";
import cars from "./data.json";

function App() {
  const options = {
    pageable: true,
    pagerCss: "pager",
    pageSize: 5,
    tableCss: "ui fixed green table",
    customCols: [
      {
        Avatar:
          '<div style="min-height:5em"> <img style="height:4em"  decoding="async" src=${Avatar}></img></div'
      }
    ]
  };
  return (
    <div className="App">
      <Table json={cars} options={options} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
