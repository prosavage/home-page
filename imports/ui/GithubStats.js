import React from 'react';
import GitHubProjectInfo from "./GitHubProjectInfo";


export default class GithubStats extends React.Component {
    render() {
        return (
            <div className="github-stats">
                <div className="text">
                    <h1>ABOUT ME</h1>
                    <br/>
                    <p>I am a passionate developer, who loves working on different projects,</p>
                    <p>from things such as minecraft plugins,
                        to developing genomic research tools for laboratory usage. I am proficient in Java, JavaFX,
                        MongoDB, and some web technology stacks
                        such as React.</p>
                    <br/>
                    <h3>Notable Projects.</h3>
                    <br/>
                    <table className="projects">
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Language</th>
                            <th>Stars</th>
                        </tr>
                        <GitHubProjectInfo user="ProSavage" repo="SavageFactions"/>
                        <GitHubProjectInfo user="ProSavage" repo="CentralizedAccidentReportSystem"/>
                        <GitHubProjectInfo user="ProSavage" repo="TheBreakfastClub"/>
                        <GitHubProjectInfo user="ProSavage" repo="home-page"/>
                        <GitHubProjectInfo user="ProSavage" repo="osu-pp-score-calc"/>
                    </table>
                </div>
                <br/>
            </div>
        );
    }
}