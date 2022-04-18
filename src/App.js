import React from "react";
import "./style.css"
import Form from "./components/Form"

export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Form />
            </div>
        )
    }
}