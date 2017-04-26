var Entrada = require('../models/entradas');

module.exports.find = function(query, done){
    Entrada.find(query, done);

};

module.exports.create = function(obj, done){

   
    var entrada = new Entrada(obj);
    entrada.save(function(err){
        done(err, entrada);
    });

}