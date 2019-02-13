import React from "react";
import TitleBar from "./TitleBar";
import LandingImage from "./LandingImage";


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navLinks: [
                {name: "Home", link: "localhost:3000"},
                {name: "GitHub", link: "localhost:3000"},
                {name: "YouTube", link: "localhost:3000"}
            ]
        };
    }

    render() {

        return (
            <React.Fragment>
                <div>
                    <TitleBar items={this.state.navLinks}/>
                </div>
                <LandingImage/>
            </React.Fragment>

        )
    }
}