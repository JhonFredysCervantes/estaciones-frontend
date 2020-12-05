import http from './../http-common';

class RequestStation{
    
    createStation(data){
        return http.post("/estacion/crear",data);
    }

    updateStation(data, id){
        return http.put("/estacion/editar/"+id,data);
    }

    deleteStation(id){
        return http.delete("/estacion/eliminar/"+id);
    }

    getStation(id){
        return http.get("/estacion/obtener/"+id);
    }

    getStations(){
        return http.get("/estacion/listarestaciones");
    }

}

export default new RequestStation();