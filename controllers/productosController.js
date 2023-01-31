const model = require('../models/productosModel.js');

module.exports = {
    getAll:(request, response) => {
        model.getAll((error, result) => {
            if(error){
                response.send(error);
            }else{
                response.send(result);
            }
        })
    },
    getById:(request, response) => {
        const id = request.params.id;

        model.getById(id, (error, result) => {
            if(error){
                response.send(error);
            }else{
                response.send(result);
            }
        })
    }
}