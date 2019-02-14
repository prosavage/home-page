import React from 'react';

export default class GitHubProjectInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            stargazers: 0,
            open_issues: 0,
            created: '',
            language: '',
            description: ''
        };
    }
    getInfo() {
        let that = this;
        function setInfo() {
            let info = JSON.parse(this.responseText);
            that.setState( {
                name: info.name,
               stargazers: info.stargazers_count,
                open_issues: info.open_issues,
                created: info.created_at,
                language: info.language,
                description: info.description
            });
        }
        let request = new XMLHttpRequest();
        request.onload = setInfo;
        request.open('get', 'https://api.github.com/repos/' + this.props.user + '/' + this.props.repo);
        request.send();

    }

    render() {
        return (
          <div>
              {this.getInfo()}
              <h4>{this.state.name}</h4>
              <p>{this.state.description}</p>
          </div>
        );
    }


}