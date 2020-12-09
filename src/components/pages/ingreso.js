import React from 'react';

import HeaderAvatar from './../headerAvatar';
import RequestStation from './../../services/stationService';
import RequestSample from './../../services/sampleService';
import RequestPlot from './../../services/plotService';

import './../css/ingreso.css';

class Ingreso extends React.Component{
    constructor(props){
        super(props);

        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.fieldClear = this.fieldClear.bind(this);
        this.plotFieldClear = this.plotFieldClear.bind(this);
        this.handleType = this.handleType.bind(this);
        this.handleAddPlot = this.handleAddPlot.bind(this);
        this.handleDeletePlot = this.handleDeletePlot.bind(this);

        this.state = {
            nombre : "",
            descripcion : "",
            region : "",
            lat : '',
            lon : '',
            unidad : "",
            tipo : '',
            area : '',

            area_parcela : '',
            lat_parcela : '',
            lon_parcela : '',
            descripcion_parcela : "",

            parcelas : [],

            nParcelas : 0
        }
    }

    handleOnChange(e){
        this.setState({[e.target.name] : e.target.value});
    }

    handleSave(){
        var station = {
            nombre : this.state.nombre ,
            descripcion : this.state.descripcion,
            region : this.state.region,
            lat : this.state.lat,
            lon : this.state.lon,
            unidad : this.state.unidad
        };

        var sample = {
            tipo : this.state.tipo,
            area : this.state.area,
        };

        var allPlots = this.state.parcelas;

        if(this.state.tipo==='C'){

        }
        
    }

    handleAddPlot(){

        if((this.state.area_parcela ==='') || 
            (this.state.lat_parcela ==='') || (this.state.lon_parcela==='')){
            alert("Existen campos vacios");
        }else{
            var parcela = {
                latitud : this.state.lat_parcela,
                longitud : this.state.lon_parcela,
                area : this.state.area_parcela,
                descripcion : this.state.descripcion_parcela
            };

            var objeto = this.state.parcelas;
            objeto.push(parcela);

            this.setState({
                parcelas : objeto
            });

            this.plotFieldClear();
        }

    }


    handleDeletePlot(e){
        var obj = this.state.parcelas;

        var op = window.confirm("¿Estás seguro de eliminar esta parcela?");

        if(op){
            var contador = 0;
            obj.map((r)=>{
                if((r.latitud===e.latitud)&&(r.longitud===e.longitud)&&(r.area===e.area)&&(r.descripcion===e.descripcion)){
                    obj.splice(contador,1);
                }
                contador++;
            });
            
            this.setState({
                parcelas : obj
            });
        }
    }

    handleType(e){
        this.setState({tipo : e});
    }

    fieldClear(){
        this.setState({
            nombre : "",
            descripcion : "",
            region : "",
            lat : '',
            lon : '',
            unidad : "",
            tipo : '',
            area : '',
        });

        this.plotFieldClear();
    }

    plotFieldClear(){
        this.setState({
            area_parcela : '',
            lat_parcela : '',
            lon_parcela : '',
            descripcion_parcela : ""
        });
    }

    render(){
        return(
            <React.Fragment>

                <header className="App-header">
                        <HeaderAvatar></HeaderAvatar>
                </header>

                <div className="row formRow">

                    <div className="col-md-8 col-sm-12">
                        <form>
                            <div className="form_group generalInformation">

                                <h4>Información General</h4>
                                <label for="name">Nombre estaci&oacute;n</label>
                                <input 
                                    className="form-control" 
                                    name="nombre"
                                    type="text" 
                                    placeholder="Ingrese un nombre"
                                    value={this.state.nombre}
                                    onChange={this.handleOnChange}
                                    required>
                                </input>

                                <label>Descripción</label>
                                <textarea 
                                    className="textarea form-control" 
                                    name="descripcion"
                                    rows="3"
                                    value={this.state.descripcion}
                                    onChange={this.handleOnChange}>
                                </textarea>

                            </div>

                            <div className="form_group spaceInformation">
                                <h4>Informaci&oacute;n Espacial</h4>

                                <label >Regi&oacute;n</label>
                                <select className="form-control" name="region">
                                    <option>Regi&oacute;n Caribe</option>
                                    <option>Regi&oacute;n Insular</option>
                                    <option>Regi&oacute;n Pasifica</option>
                                </select>

                                <label >Latitud</label>
                                <input 
                                    className="form-control" 
                                    name="lat"
                                    type="number" 
                                    step="any" 
                                    min="0" 
                                    placeholder="Lat"
                                    value={this.state.lat}
                                    onChange={this.handleOnChange}
                                    required>
                                </input>

                                <label >Longitud</label>
                                <input 
                                    className="form-control" 
                                    name="lon"
                                    type="number" 
                                    step="any" 
                                    min="0" 
                                    placeholder="Lon"
                                    value={this.state.lon}
                                    onChange={this.handleOnChange}
                                    required>
                                </input>

                                <label >Unidad de manejo</label>
                                <select className="form-control" name="unidad">
                                    <option>HFJC</option>
                                    <option>CKER</option>
                                    <option>DDUD</option>
                                </select>

                            </div>

                            <div className="form_group sampleInformation">
                                <h4>Informaci&oacute;n Muestreo</h4>

                                <fieldset className="form-group">
                                    <div className="row">
                                        <legend className="col-form-label col-sm-2 pt-0">Tipo</legend>
                                        <div className="col-sm-10">
                                            <div className="form-check" onClick={()=>this.handleType('S')}>
                                                <input className="form-check-input" id="radioSample"
                                                        type="radio" value='S' name="tipo" required/>
                                                <label className="form-check-label" htmlFor="radioSample">
                                                    Simple
                                                </label>
                                            </div>
                                            <div className="form-check" onClick={()=>this.handleType('C')}>
                                                <input className="form-check-input" id="radioComposite"
                                                        type="radio" name="tipo" value='C' required/>
                                                <label className="form-check-label" htmlFor ="radioComposite">
                                                    Compuesto
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>

                                <div className="sample" hidden={this.state.tipo==='S'?false:true}>
                                    <label >&Aacute;rea</label>
                                    <input 
                                        className="form-control" 
                                        name="area"
                                        type="number" 
                                        step="any" 
                                        min="0" 
                                        placeholder="En m^2"
                                        value={this.state.area}
                                        onChange={this.handleOnChange}
                                        required>
                                    </input>
                                </div>

                                <div className="composite" id="composite" hidden={this.state.tipo==='C'?false:true} >
                                    <h4>Parcela</h4>
                                    <hr className="bar" />

                                    <label >&Aacute;rea</label>
                                    <input 
                                        className="form-control" 
                                        id="pArea"
                                        name="area_parcela"
                                        type="number" 
                                        step="any" 
                                        min="1" 
                                        placeholder="m^2"
                                        value={this.state.area_parcela}
                                        onChange={this.handleOnChange}
                                        required>
                                    </input>

                                    <label >Latitud</label>
                                    <input 
                                        className="form-control" 
                                        id="pLat"
                                        name="lat_parcela"
                                        type="number" 
                                        step="any" 
                                        min="1" 
                                        placeholder="Lat"
                                        value={this.state.lat_parcela}
                                        onChange={this.handleOnChange}
                                        required>
                                    </input>

                                    <label >Longitud</label>
                                    <input 
                                        className="form-control" 
                                        id="pLon" 
                                        name="lon_parcela"
                                        type="number" 
                                        step="any" 
                                        min="1" 
                                        placeholder="Lon"
                                        value={this.state.lon_parcela}
                                        onChange={this.handleOnChange}
                                        required>
                                    </input>

                                    <label >Descripci&oacute;n</label>
                                    <textarea 
                                        className="textarea" 
                                        id="pDescrip" 
                                        rows="3"
                                        name="descripcion_parcela"
                                        value={this.state.descripcion_parcela}
                                        onChange={this.handleOnChange}>
                                    </textarea> 

                                    <button 
                                        type="button" 
                                        className="btn btn-primary"
                                        onClick={this.handleAddPlot}
                                        >Agregar
                                    </button>

                                    <div className="div_table">
                                        <table className="composite_table" id ="composite_table">
                                            <thead>
                                                <th className="table_head" id="tLat">Lat</th>
                                                <th className="table_head" id="tLon">Lon</th>
                                                <th className="table_head" id="tArea">&Aacute;rea</th>
                                                <th className="table_head" id="tDescripcion">Descripci&oacute;n</th>
                                                <th className="table_head" id="tOpcion">Opcion</th>
                                            </thead>

                                            <tbody id="id_tbody">
                                                {this.state.parcelas.map((element)=>(
                                                    <tr>
                                                        <td className="table_col">{element.latitud}</td>
                                                        <td className="table_col">{element.longitud}</td>
                                                        <td className="table_col">{element.area}</td>
                                                        <td className="table_col">{element.descripcion}</td>
                                                        <td className="table_col">
                                                            <button 
                                                                type="button"
                                                                className="btn btn-danger" 
                                                                onClick={()=>this.handleDeletePlot(element)}>
                                                                Eliminar
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                                
                                            </tbody>
                                        </table> 
                                    </div>                            

                                </div>

                            </div>

                            <button type="submit" className="btn btn-success">Guardar</button>
                            <button type="reset" className="btn btn-danger" onClick={this.fieldClear}>Limpiar</button>

                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    };

}

export default Ingreso;