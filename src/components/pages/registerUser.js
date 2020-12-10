import React from 'react';
import Header from '../header';

import RequestUser from "./../../services/userService";

import './../css/registerUser.css';

class RegisterUser extends React.Component{
    constructor(props){
        super(props);

        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSaveUser = this.handleSaveUser.bind(this);

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

    handleSaveUser(){
        var user = {
            primerNombre : this.state.name,
            primerApellido : this.state.lastname,
            email : this.state.email,
            password : this.state.password
        };

        if(this.state.password.length<=1){
            alert("Lo sentimos, la contraseña debe tener por lo menos 2 caracteres");
        }else{
            RequestUser.createUser(user).then(response =>(
                this.setState({
                    name : response.data.primerNombre,
                    lastname : response.data.primerApellido,
                    email : response.data.email
                })
            )).catch(e =>{
                console.log(e);
            });
        }
    }

    render(){
        return(
            <React.Fragment>
                <header className="App-header">
                    <Header></Header>
                </header>
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
                                    onChange={this.handleOnChange}
                                    required
                                    />
                            </div>

                            <label htmlFor="lastname" class="col-sm-2 col-form-label" >Apellido</label>
                            <div class="col-sm-10">
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    name="lastname" 
                                    value={this.state.lastname}
                                    onChange={this.handleOnChange}
                                    required
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
                                    required
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
                                    required
                                    />
                            </div>
                            <button className="btn btn-primary" type="submit" onClick={this.handleSaveUser}>Registrar</button>
                        </form>

                    </div>
                </div>
                
            </React.Fragment>
        );
    }
}

export default RegisterUser;