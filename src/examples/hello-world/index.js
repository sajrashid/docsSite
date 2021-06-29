import React from "react"
import ReactDOM from "react-dom"
import Table from 'react-dj-table'

function App() {
    const data = [
        { id: 0, name: "fluffly", isMale: false },
        { id: 1, name: "tim", isMale: true }
    ]
    return (
        <div className="App">
            <Table json={data} />
            <h1>Well, yeah.</h1>
            <h2>Start editing to see some magic happen!</h2>
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)