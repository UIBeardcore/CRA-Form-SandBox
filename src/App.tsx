import * as React from "react";
import "./App.css";
import IFormData from "./interfaces/IFormData";

import Form from "./Form";
import List from "./List";

import dataProvider from "./services/data";
// import IItem from "./interfaces/IItem";

const logo = require("./logo.svg");

interface IAppState {
    listItemsCount: number;
}

class App extends React.Component<{}, IAppState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            listItemsCount: 0
        };
    }

    public componentWillMount(): void {
        this.setState({
            listItemsCount: dataProvider.getData().length
        });
    }

    render() {
        const { listItemsCount } = this.state;
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
                                    <Form
                                        saveData={(data) =>
                                            this.saveFormData(data)
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-block">
                                    <List 
                                        listItemsCount={listItemsCount} 
                                        showOnlyVisible={false} 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    saveFormData(formData: IFormData) {
        dataProvider.saveData({
            id: Date.now(),
            ...formData
        });

        this.setState({
            listItemsCount: dataProvider.getData().length
        });
    }

}

export default App;
