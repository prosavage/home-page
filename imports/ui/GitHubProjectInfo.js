import React from 'react';
import GetResponse from "../api/GetRespone";

export default class GitHubProjectInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            stargazers: 0,
            open_issues: 0,
            created: '',
            language: '',
            description: '',
            link: '',
            homepage: ''
        };
    }

    getInfo() {
        let that = this;

        function setInfo() {
            let info = JSON.parse(this.responseText);
            that.setState({
                name: info.name,
                stargazers: info.stargazers_count,
                open_issues: info.open_issues,
                created: info.created_at,
                language: info.language,
                description: info.description,
                link: info.html_url,
                homepage: info.homepage
            });
        }

        let request = new XMLHttpRequest();
        request.onload = setInfo;
        GetResponse.getResponse(request, this.props.user, this.props.repo);
    }

    render() {
        return (
            <tr>
                {this.getInfo()}
                <td><a href={this.state.link}>{this.state.name}</a></td>
                <td>{this.state.description}</td>
                <td>{this.state.language}</td>
                <td>{this.state.stargazers}</td>
            </tr>
        );
    }


}