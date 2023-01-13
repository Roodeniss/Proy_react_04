import React from "react"
import Header from "./components/Header.js"
import Main from "./components/Main.js"
import data from "./data.js"
import './App.css';

function App() {
    const travelElements = data.map(travel => {
        return (
            <Main 
                key={travel.id}
                {...travel}
            />
        )
    })
    return (
        <div>
            <Header />
            {travelElements}
        </div>
    )
}

export default App;
