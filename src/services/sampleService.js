import http from './../http-common';

class RequestSample{
    
    createSample(data){
        return http.post("/crear/muestreo",data);
    }

    updateSample(data, id){
        return http.put("/actualizar/muestreo/"+id,data);
    }

    deleteSample(id){
        return http.delete("/eliminar/muestreo/"+id);
    }

}

export default new RequestSample();