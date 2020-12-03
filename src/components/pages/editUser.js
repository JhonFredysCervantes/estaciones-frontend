import React from 'react';

import './../css/edituser.css';

class EditUser extends React.Component{
    constructor(props){
        super(props);

        this.state={
            photo : "",
            email : props.email,
            name : props.username,
            lastname : props.userlastname
        };
    }

    render(){
        return(
            <div className="row userInformation">
                <div className="col-6">
                    <h2>Perfil</h2>
                    <div className="userPhoto">
                        <img src={this.photo} alt="User Photo"/>
                    </div>

                    <div class="form-group">

                        <label htmlFor="name" class="col-sm-2 col-form-label" >Nombre</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="name" value={this.state.name} disabled readonly/>
                        </div>

                        <label htmlFor="lastname" class="col-sm-2 col-form-label" >Apellido</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="lastname" value={this.state.lastname} disabled readonly/>
                        </div>

                        <label htmlFor="email" class="col-sm-2 col-form-label" >Email</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="email" value={this.state.email} disabled readonly/>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default EditUser;