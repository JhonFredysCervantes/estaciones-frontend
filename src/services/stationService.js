import http from './../http-common';

class RequestStation{
    
    createStation(data){
        return http.post("/crear/estacion",data);
    }

    updateStation(data, id){
        return http.put("/actualizar/estacion/"+id,data);
    }

    deleteStation(id){
        return http.delete("/eliminar/estacion/"+id);
    }

}

export default new RequestStation();