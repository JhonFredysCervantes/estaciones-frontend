import http from './../http-common';

class RequestSample{
    
    createSample(data){
        return http.post("/muestreo/crear",data);
    }

    updateSample(data, id){
        return http.put("/muestreo/editar/"+id,data);
    }

    deleteSample(id){
        return http.delete("/muestreo/eliminar/"+id);
    }

    getSamples(){
        return http.get("/muestreo/listarmuestreos");
    }

    getSample(id){
        return http.get("/muestreo/obtener/"+id);
    }

}

export default new RequestSample();