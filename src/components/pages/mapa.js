import React from 'react';
import {Marker, TileLayer, Popup, MapContainer, Tooltip} from 'react-leaflet';
import RequestStation from './../../services/stationService';

import Avatar from '../avatar';
import Header from '../header';

import './../css/mapa.css';


class Mapa extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            stations : [],
        }
    }

    componentDidMount(){ 
        RequestStation.getStations().then((response_)=>(
            this.setState({
                stations : response_.data
            })
        ))
    }
    
    render(){

        return(
            <React.Fragment>

                <header className="App-header">
                    <Header avatar={Avatar}/>
                </header>

                <div className="leaflet-container">
                    <MapContainer center={[51.505, -0.09]} zoom={5} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {
                            this.state.stations.map((e)=>(
                                e.muestreo.parcelas.map((p)=>(
                                    <Marker key={p.id} position={[p.latitud, p.longitud]}>
                                    <Tooltip direction="center" opacity={2}>Parcela</Tooltip>
                                        <Popup>
                                            ----PARCELA---- <br/>
                                            Pertenece a: {e.nombre} <br/> 
                                            {p.descripcion}. <br /> 
                                            Lat: {p.latitud} - Lon: {p.longitud}
                                        </Popup>
                                    </Marker>
                                ))
                            ))
                        }
                        {
                            this.state.stations.map((e)=>(
                                <Marker key={e.id} position={[e.latitud, e.longitud]}>
                                    <Tooltip direction="center" opacity={2}>Estacion</Tooltip>
                                    <Popup>
                                        ----ESTACIÖN---- <br />
                                        Nombre : {e.nombre}<br />
                                        {e.descripcion}. <br /> 
                                        Lat: {e.latitud} - Lon: {e.longitud}
                                    </Popup>
                                </Marker>
                            ))
                        }
                    </MapContainer>
                </div>
            </React.Fragment>
        );
    }

}

export default Mapa;