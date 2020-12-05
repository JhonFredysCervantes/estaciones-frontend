import http from './../http-common';

class RequestUser{
    
    createUser(data){
        return http.post("/usuario/crear",data);
    }

    updateUser(data, id){
        return http.put("/usuario/editar/"+id,data);
    }

    deleteteUser(id){
        return http.delete("/usuario/eliminar/"+id);
    }

    getUsers(){
        return http.get("/usuario/listarusuarios");
    }

    getUser(id){
        return http.get("/usuario/obtener/"+id);
    }

}

export default new RequestUser();