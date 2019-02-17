import React from 'react';


export default class Profiles extends React.Component {

    render() {
        return (
          <div className="profiles-root">
            <div className="buttons">
                <button className="instagram"><i className="fab fa-instagram fa-3x"></i></button>
                <button className="spigot"><i className="fas fa-cubes fa-3x"></i></button>
                <button className="patreon"><i className="fab fa-patreon fa-3x"></i></button>
                <button className="discord"><i className="fab fa-discord fa-3x"></i></button>
            </div>
          </div>
        );
    }


}