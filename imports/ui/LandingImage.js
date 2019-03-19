import React from 'react';

export default class LandingImage extends React.Component {
  
    constructor(props) {
        super(props);
        this.scrollDown = this.scrollDown.bind(this);
    }

    scrollDown() {
        this.props.landingElem.scrollIntoView({ behavior: 'smooth' });
	
    }
    render() {
        return (
            <div className="landing-image">
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <h3>{this.props.subtitle}</h3>
                </div>
                <div onClick={this.scrollDown} className="down-arrow">
                    <div className="arrow">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        )
    }

}