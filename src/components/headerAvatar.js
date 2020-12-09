import React from 'react';

import Avatar from './avatar';

import './css/header.css';


class HeaderAvatar extends React.Component{

    render(){
        return(
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <a className="navbar-brand" href="/">Monitoreo</a>

                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/ingreso">Ingreso</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/map">Mapa</a>
                                </li>
                            </ul>
                        </div>
                        <Avatar></Avatar>
                    </nav>
                </div>
            </div>
        );
    }
}

export default HeaderAvatar;