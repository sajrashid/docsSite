import React from "react";
import ReactDOM from "react-dom";
import Table from "react-dj-table";
import "semantic-ui-css/semantic.min.css";
import data from "/data.json";

function App() {
  const options = {
    tableCss: "ui fixed green table",
    iconCols: [{ email: '<i class="envelope icon"></i>email' }],
    customCols: [
      {
        Avatar:
          '<div style="min-height:5em"><img  decoding="async" src=${Avatar}></img></div'
      }
    ]
  };
  return (
    <div className="App">
      <Table json={data} options={options} />
      <h1>Well, yeah.</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
