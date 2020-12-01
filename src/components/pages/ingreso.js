import React from 'react';

import './../css/ingreso.css';

class Ingreso extends React.Component{
    constructor(props){
        super(props);

        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleType = this.handleType.bind(this);

        this.state = {
            nombre : "",
            descripcion : "",
            region : "",
            lat : undefined,
            lon : undefined,
            unidad : "",

            tipo : 'S',
            area : undefined,
            lat_parcela : undefined,
            lon_parcela : undefined,
            descripcion_parcela : ""

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
            lat : this.state.lat_parcela,
            lon : this.state.lon_parcela,
            descripcion : this.state.descripcion_parcela
        };
    }

    handleType(e){
        this.setState({tipo : e.target.value});
    }

    fieldClear(){
        this.setState({
            nombre : "",
            descripcion : "",
            region : "",
            lat : undefined,
            lon : undefined,
            unidad : "",

            tipo : 'S',
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

                            <label for="description">Descripción</label>
                            <textarea className="textarea form-control" rows="3"></textarea>

                        </div>

                        <div className="form_group spaceInformation">
                            <h4>Información Espacial</h4>

                            <label >Región</label>
                            <select className="form-control">
                                <option>Region Caribe</option>
                                <option>Region Insular</option>
                                <option>Region Pasifica</option>
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
                            <h4>Información Muestreo</h4>

                            <fieldset className="form-group">
                                <div className="row">
                                    <legend className="col-form-label col-sm-2 pt-0" type>Radios</legend>
                                    <div className="col-sm-10">
                                        <div className="form-check">
                                            <input className="form-check-input" 
                                                    type="radio" value='S' name="tipo"  
                                                    onClick={this.state.handleType} />
                                            <label className="form-check-label">
                                                Simple
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="tipo"
                                                    value='C' onClick={this.state.handleType} />
                                            <label className="form-check-label">
                                                Compuesto
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>

                            <div className="sample">
                                <label >Area</label>
                                <input className="form-control" type="number" step="any" min="0" placeholder="En m^2"></input>
                            </div>

                            <div className="composite" id="composite" >
                                <h4>Parcela</h4>
                                <hr className="bar" />

                                <label >Latitud</label>
                                <input className="form-control" type="number" step="any" min="1" placeholder="Lat"></input>

                                <label >Longitud</label>
                                <input className="form-control" type="number" step="any" min="1" placeholder="Lon"></input>

                                <label >Descripción</label>
                                <textarea className="textarea" rows="3"></textarea> 

                                <button type="button" class="btn btn-primary">Agregar</button>

                                <div className="div_table">
                                    <table className="composite_table">
                                        <thead>
                                            <th className="table_head">Lat</th>
                                            <th className="table_head">Lon</th>
                                            <th className="table_head">Área</th>
                                            <th className="table_head">Descripción</th>
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

                        <button type="submit" class="btn btn-success">Guardar</button>
                        <button type="reset" class="btn btn-danger">Limpiar</button>

                    </form>
                </div>
            </div>
        );
    };

}

export default Ingreso;