import React from 'react';

export default class LandingImage extends React.Component {
    render() {
        return (
            <div className="landing-image">
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <h3>{this.props.subtitle}</h3>
                </div>
                <div className="down-arrow">
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