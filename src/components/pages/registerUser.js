import React from 'react';

import './../css/registerUser.css';

class RegisterUser extends React.Component{
    constructor(props){
        super(props);

        this.handleOnChange = this.handleOnChange.bind(this);

        this.state={
            name : "",
            lastname : "",
            email : "",
            password : ""
        };
    }

    handleOnChange(e){
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    render(){
        return(
            <div className="row userInformation">
                <div className="col-8">

                    <h2>Restro de Usuarios</h2>

                    <form class="form-group">

                        <label htmlFor="name" class="col-sm-2 col-form-label" >Nombre</label>
                        <div class="col-sm-10">
                            <input 
                                type="text" 
                                class="form-control" 
                                name="name" 
                                value={this.state.name} 
                                onChange={this.handleOnChange}/>
                        </div>

                        <label htmlFor="lastname" class="col-sm-2 col-form-label" >Apellido</label>
                        <div class="col-sm-10">
                            <input 
                                type="text" 
                                class="form-control" 
                                name="lastname" 
                                value={this.state.lastname}
                                onChange={this.handleOnChange}
                                />
                        </div>

                        <label htmlFor="email" class="col-sm-2 col-form-label" >Email</label>
                        <div class="col-sm-10">
                            <input 
                                type="email" 
                                class="form-control" 
                                name="email" 
                                value={this.state.email}
                                onChange={this.handleOnChange}
                                />
                        </div>

                        <label htmlFor="email" class="col-sm-2 col-form-label" >Contraseña</label>
                        <div class="col-sm-10">
                            <input 
                                type="password" 
                                class="form-control" 
                                name="password" 
                                value={this.state.password}
                                onChange={this.handleOnChange}
                                />
                        </div>
                        <button className="btn btn-primary" type="submit">Registrar</button>
                    </form>

                </div>
            </div>
        );
    }
}

export default RegisterUser;