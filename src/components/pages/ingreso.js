import React from 'react';

import './../css/ingreso.css';

class Ingreso extends React.Component{
    constructor(props){
        super(props);

        this.handleOnChange = this.handleOnChange.bind(this);
        this.fieldClear = this.fieldClear.bind(this);
        this.handleType = this.handleType.bind(this);
        this.handlePlot = this.handlePlot.bind(this);

        this.state = {
            nombre : "",
            descripcion : "",
            region : "",
            lat : undefined,
            lon : undefined,
            unidad : "",

            tipo : '',
            area : undefined,
            lat_parcela : undefined,
            lon_parcela : undefined,
            descripcion_parcela : "",
        }
    }

    handleOnChange(e){
        this.setState({[e.target.name] : e.target.value});
    }

    handleOnClick(){
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

        var plot = {
            area : this.state.area,
            lat : this.state.lat_parcela,
            lon : this.state.lon_parcela,
            descripcion : this.state.descripcion_parcela
        };
    }

    handlePlot(){

        var pArea = document.getElementById("pArea").value;
        var pLat = document.getElementById("pLat").value;
        var pLon = document.getElementById("pLon").value;
        var pDescrip = document.getElementById("pDescrip").value;

    }

    handleType(e){
        this.setState({tipo : e});
    }

    fieldClear(){
        this.setState({
            nombre : "",
            descripcion : "",
            region : "",
            lat : undefined,
            lon : undefined,
            unidad : "",

            tipo : '',
            area : undefined,
            lat_parcela : undefined,
            lon_parcela : undefined,
            descripcion_parcela : ""
        });
    }

    render(){
        return(
            <div className="row formRow">

                <div className="col-md-8 col-sm-12">
                    <form>
                        <div className="form_group generalInformation">

                            <h4>Información General</h4>
                            <label for="name">Nombre estaci&oacute;n</label>
                            <input className="form-control" type="text" placeholder="Ingrese un nombre"></input>

                            <label>Descripción</label>
                            <textarea className="textarea form-control" rows="3"></textarea>

                        </div>

                        <div className="form_group spaceInformation">
                            <h4>Informaci&oacute;n Espacial</h4>

                            <label >Regi&oacute;n</label>
                            <select className="form-control">
                                <option>Regi&oacute;n Caribe</option>
                                <option>Regi&oacute;n Insular</option>
                                <option>Regi&oacute;n Pasifica</option>
                            </select>

                            <label >Latitud</label>
                            <input className="form-control" type="number" step="any" min="0" placeholder="Lat"></input>

                            <label >Longitud</label>
                            <input className="form-control" type="number" step="any" min="0" placeholder="Lon"></input>

                            <label >Unidad de manejo</label>
                            <select className="form-control">
                                <option>HFJC</option>
                                <option>CKER</option>
                                <option>DDUD</option>
                            </select>

                        </div>

                        <div className="form_group sampleInformation">
                            <h4>Informaci&oacute;n Muestreo</h4>

                            <fieldset className="form-group">
                                <div className="row">
                                    <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                                    <div className="col-sm-10">
                                        <div className="form-check" onClick={()=>this.handleType('S')}>
                                            <input className="form-check-input" id="radioSample"
                                                    type="radio" value='S' name="tipo"/>
                                            <label className="form-check-label" htmlFor="radioSample">
                                                Simple
                                            </label>
                                        </div>
                                        <div className="form-check" onClick={()=>this.handleType('C')}>
                                            <input className="form-check-input" type="radio" id="radioComposite"
                                                    name="tipo" value='C'/>
                                            <label className="form-check-label" htmlFor ="radioComposite">
                                                Compuesto
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>

                            <div className="sample">
                                <label >&Aacute;rea</label>
                                <input className="form-control" type="number" step="any" min="0" placeholder="En m^2"></input>
                            </div>

                            <div className="composite" id="composite" hidden={this.state.tipo==='C'?false:true} >
                                <h4>Parcela</h4>
                                <hr className="bar" />

                                <label >&Aacute;rea</label>
                                <input className="form-control" id="pArea" type="number" step="any" min="1" placeholder="m^2"></input>

                                <label >Latitud</label>
                                <input className="form-control" id="pLat" type="number" step="any" min="1" placeholder="Lat"></input>

                                <label >Longitud</label>
                                <input className="form-control" id="pLon"type="number" step="any" min="1" placeholder="Lon"></input>

                                <label >Descripci&oacute;n</label>
                                <textarea className="textarea" id="pDescrip" rows="3"></textarea> 

                                <button type="button" className="btn btn-primary">Agregar</button>

                                <div className="div_table">
                                    <table className="composite_table">
                                        <thead>
                                            <th className="table_head">Lat</th>
                                            <th className="table_head">Lon</th>
                                            <th className="table_head">&Aacute;rea</th>
                                            <th className="table_head">Descripci&oacute;n</th>
                                            <th className="table_head">Opcion</th>
                                        </thead>

                                        <tbody>
                                            <td className="table_col"></td>
                                            <td className="table_col"></td>
                                            <td className="table_col"></td>
                                            <td className="table_col"></td>
                                            <td className="table_col"></td>
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
        );
    };

}

export default Ingreso;