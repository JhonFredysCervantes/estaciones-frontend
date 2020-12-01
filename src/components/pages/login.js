import React from 'react';

import './../css/login.css';

class Login extends React.Component{

    constructor(props){
        super(props);

        this.handleOnChange = this.handleOnChange.bind(this);

        this.state = {
            username : "",
            password : ""
        }
    }

    handleOnChange(e){
        this.setState({[e.target.name] : e.target.value});
        console.log(this.state.username);
    }

    handleOnClick(){

        var usuario = {
            email : this.state.username,
            password : this.state.password
        };

        //agregar Request
        
    }

    render(){
        return(
            <div className="row body">
                <div className="col-4 login">
                    <form className="login">
                        <div className="login_title"> <h4>Bienvenido a Monitoreo</h4> </div>
                        <div className="form-group">
                            <label >Email address</label>
                            <input type="email" className="form-control" name="username" value={this.state.username} onChange={this.handleOnChange} aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleOnChange} />
                        </div>
                        
                        <div className="options">
                            <button type="submit" className="btn btn-primary">Ingresar</button>
                            <div className="registrar"><a href="-#">Registrarme</a></div>
                        </div>
                    </form>
                </div>
            </div>
        );
    };
}

export default Login;