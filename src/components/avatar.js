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
                <a href="/usuario">
                    Texto para rellenar
                </a>
                <img src={this.state.photo} alt="userphoto" />
            </div>
        );
    }
}

export default Avatar;