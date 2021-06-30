import React from "react";
import ReactDOM from "react-dom";
import Table from "react-dj-table";
import cars from "./data.json";
function App() {
  const options = {
    tableCss: "table-fixed cursor-pointer w-full",
    searchInputCss: "searchInputCss",
    cellCss: "break-words border p-4 ",
    pagerCss: "pager",
    pageable: false,
    theadCss: "bg-blue-500 text-gray-200 px-8 py-4",
    filters: true,
    selectable: true,
    selectedRowCss: "selectedRow",
    iconCols: [
      { email: '<i class="envelope icon"></i>Email' },
      { Avatar: '<i class="id badge icon"></i>Avatar' }
    ],
    // eslint-disable-next-line no-template-curly-in-string
    customCols: [
      {
        Avatar:
          '<div style="min-height:6em"><img  decoding="async" src=${Avatar}></img></div'
      }
    ] //adding min height reduces loading flash as image cells are not resized vertically
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
