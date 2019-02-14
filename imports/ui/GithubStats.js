import React from 'react';
import GitHubProjectInfo from "./GitHubProjectInfo";


export default class GithubStats extends React.Component {
    render() {
        return (
            <div className="github-stats">
                <div className="text">
                    <h1>ABOUT ME</h1>
                    <br/>
                    <p>I am a passionate developer, and a freshman computer science major.</p>
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
                    </table>

                </div>
            </div>
        );
    }
}