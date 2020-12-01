import http from './../http-common';

class RequestUser{
    
    createUser(data){
        return http.post("/crear/usuario",data);
    }

    updateUser(data, id){
        return http.put("/actualizar/usuario/"+id,data);
    }

    deleteteUser(id){
        return http.delete("/eliminar/usuario/"+id);
    }

}

export default new RequestUser();