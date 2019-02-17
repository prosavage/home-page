import React from "react";
import TitleBar from "./TitleBar";
import LandingImage from "./LandingImage";
import GithubStats from "./GithubStats";
import ProjectSection from "./ProjectSection";
import Profiles from "./Profiles";


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navLinks: [
                {name: "Home", link: "http://prosavage.net"},
                {name: "GitHub", link: "https://github.com/ProSavage"},
                {name: "YouTube", link: "https://www.youtube.com/channel/UCug2TIYp3roHtQvMXYQ3atg"},
                {name: "SavageFactions", link: "http://prosavage.net/Factions"}
            ]
        };
    }

    render() {

        return (
            <React.Fragment>
                <div>
                    <TitleBar items={this.state.navLinks}/>
                </div>
                <LandingImage heading="P R O S A V A G E" subtitle="Aspiring Developer."/>
                <GithubStats/>
                <ProjectSection/>
                <Profiles/>
            </React.Fragment>

        )
    }
}