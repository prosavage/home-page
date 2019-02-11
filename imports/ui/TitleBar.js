import React from "react";

export default class TitleBar extends React.Component {
    renderItems() {
        if (this.props.items.length !== 0) {
            return this.props.items.map((item) => {
                return <li key={item.name}><a href={item.link}>{item.name}</a></li>
            });
        }
    }
    render() {
        return (
          <div className="nav-bar">
              <ul>
                  {this.renderItems()}
              </ul>
          </div>
        );
    }
}

