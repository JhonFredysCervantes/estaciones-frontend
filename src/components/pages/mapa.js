import React from 'react';

import {Marker, TileLayer, Popup, MapContainer} from 'react-leaflet';

import './../css/mapa.css';


class Mapa extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            prop : "values"
        }
    }
    
    render(){

        return(
            <div className="leaflet-container">
                <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        );
    }

}

export default Mapa;