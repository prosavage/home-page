import React from "react";
import TitleBar from "./TitleBar";


export default class App extends React.Component {
    render() {
        let navLinks = [
            {name: "Home", link: "localhost:3000"},
            {name: "REEE", link: "localhost:3000"}
        ];
        return (
            <div>
                <TitleBar items={navLinks}/>
            </div>
        )
    }
}