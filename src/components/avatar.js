import React from 'react';

import './css/avatar.css';

import Icon from './../img/userIcon.jpg';

class Avatar extends React.Component{
    constructor(props){
        super(props);

        this.state= {
            photo : Icon,
            name : props.username
        }
    }

    render(){
        return(
            <div className="user">
                <p className="navbar-text">{this.state.name}</p>
                <a href="-#" 
                    className="nav-link dropdown-toggle" 
                    id="navbarDropdownMenuLink" 
                    role="button" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="true">
                    <img src={this.state.photo} alt="userphoto" />
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="-#">Ver perfil</a>
                    <a className="dropdown-item" href="-#">Salir</a>
                </div>
            </div>
        );
    }
}

export default Avatar;