import * as React from "react";
import "./App.css";
import IFormData from "./interfaces/IFormData";

import Form from "./Form";

const logo = require("./logo.svg");

class App extends React.Component {
    render() {

        function saveData(formData: IFormData) {
            console.log(formData);
        }

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div className="App-intro">
                    <Form saveData={saveData}/>
                </div>
            </div>
        );
    }
}

export default App;
