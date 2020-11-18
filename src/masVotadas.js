const fs = require('fs')


module.exports = {
    frecuentes : './data/movies.json',
    leerJSON : function(){
        return JSON.parse(fs.readFileSync(this.frecuentes,'utf-8'));
    },
}