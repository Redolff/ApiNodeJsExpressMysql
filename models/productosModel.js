const db = require('../kc.js');

module.exports = {
    getAll:(callback) => {
        db.query('SELECT * FROM productos', (error, result) => {
            if(error){
                console.log(error);
                callback(error, null);
            }else{
                callback(null, result);
            }
        })
    },
    getById:(callback) => {
        db.query('SELECT * FROM productos WHERE Id = ?', [id], (error, result) => {
            if(error){
                console.log(error);
                callback(error, null);
            }else{
                callback(null, result);
            }
        })
    }
}