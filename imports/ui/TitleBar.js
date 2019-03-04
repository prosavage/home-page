import React from "react";

export default class TitleBar extends React.Component {
    constructor() {
        super();
        this.state = {
            backgroundColor: false,
        };
    }

    renderItems() {
        if (this.props.items.length !== 0) {
            return this.props.items.map((item) => {
                return <li key={item.name}><a href={item.link}>{item.name}</a></li>
            });
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this), {passive: true})
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this))
    }

    handleScroll(event) {
        if (window.pageYOffset === 0) {
            if(this.state.backgroundColor)
            this.setState({
                backgroundColor: false
            });
        } else {
            if(!this.state.backgroundColor)
            this.setState({
                backgroundColor: true
            });
        }
    }

    render() {

        return (
            <div className="nav-bar" style={{ animation: this.state.backgroundColor ? "fadeIn .5s ease": "fadeOut .5s ease", backgroundColor: this.state.backgroundColor ? "#2F363F": ""}}>
                <ul>
                    {this.renderItems()}
                </ul>
            </div>
        );
    }
}

