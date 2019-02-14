import React from "react";

export default class TitleBar extends React.Component {
    constructor() {
        super();
        this.state = {
            backgroundColor: '',
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
        this.setState({
            backgroundColor: '#2F363F'
        });
        if (window.pageYOffset === 0) {
            this.setState({
                backgroundColor: ''
            });
        }
    }

    render() {

        const styles = {
            navBarStyle: {
                backgroundColor: this.state.backgroundColor,
            }
        };
        const {navBarStyle} = styles;
        return (
            <div className="nav-bar" style={navBarStyle}>
                <ul>
                    {this.renderItems()}
                </ul>
            </div>
        );
    }
}

