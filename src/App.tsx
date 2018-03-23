import * as React from "react";
import "./App.css";
import IFormData from "./interfaces/IFormData";

import Form from "./Form";
import List from "./List";

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
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-block">
                                    <Form saveData={saveData} />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-block">
                                    <List />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
