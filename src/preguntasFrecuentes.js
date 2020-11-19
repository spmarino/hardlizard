const fs = require('fs')

module.exports = {
    preguntas: './data/faqs.json',
    leerJSON: function() {
        return JSON.parse(fs.readFileSync(this.preguntas, 'utf-8'));
    }
}
