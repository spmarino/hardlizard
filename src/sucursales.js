const fs = require('fs');

module.exports = {
    leerJSON: function() {
        let theatersJSON = fs.readFileSync('./data/theaters.json', 'utf-8');
        let theatersParseado = JSON.parse(theatersJSON);
        return theatersParseado
    }
}