import React from 'react';


export default class Profiles extends React.Component {

    render() {
        return (
          <div className="profiles-root">
            <div className="buttons">
                <a href="https://www.instagram.com/thecommondenamanator/">
                    <button className="instagram"><i className="fab fa-instagram fa-3x"></i></button>
                </a>
                <a href="https://www.spigotmc.org/resources/authors/prosavage.203132/">
                    <button className="spigot"><i className="fas fa-cubes fa-3x"></i></button>
                </a>
                <a href="https://www.patreon.com/prosavage">
                    <button className="patreon"><i className="fab fa-patreon fa-3x"></i></button>
                </a>
                <a href="https://discord.gg/78n6mSu">
                    <button className="discord"><i className="fab fa-discord fa-3x"></i></button>
                </a>
            </div>
          </div>
        );
    }


}