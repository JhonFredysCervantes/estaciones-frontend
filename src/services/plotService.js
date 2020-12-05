import http from './../http-common';

class RequestPlot{
    
    createPlot(data){
        return http.post("/parcela/crear",data);
    }

    updatePlot(data, id){
        return http.put("/parcela/editar/"+id,data);
    }

    deletePlot(id){
        return http.delete("/parcela/eliminar/"+id);
    }
    getPlots(){
        return http.get("/parcela/listarparcelas");
    }

}

export default new RequestPlot();