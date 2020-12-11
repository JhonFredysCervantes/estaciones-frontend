import React from 'react';
import {Marker, TileLayer, Popup, MapContainer} from 'react-leaflet';
import RequestPlot from './../../services/plotService';

import Avatar from '../avatar';
import Header from '../header';

import './../css/mapa.css';


class Mapa extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            plots : []
        }
    }

    componentDidMount(){ 
        RequestPlot.getPlots().then((response)=>(
            this.setState({
                plots : response.data
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
                    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {
                            this.state.plots.map((e)=>(
                                <Marker key={e.id} position={[e.latitud, e.longitud]}>
                                    <Popup>
                                        {e.descripcion}. <br /> Lat: {e.latitud} - Lon: {e.longitud}
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