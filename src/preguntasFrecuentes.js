const fs = require('fs')

module.exports = {
    preguntas: './data/faqs.json',
    leerJSON: function () {
        return JSON.parse(fs.readFileSync(this.preguntas, 'utf-8'));
    },

    totalPreguntas : function (){
        let libroTraducido = this.leerJSON()

        return libroTraducido.faqs.length

    },

    listaPreguntas : function(){
        let preguntas = this.leerJSON()

        let pregunton = preguntas.faqs.map(function(pepito){

            return `\n\n ${pepito.faq_title}\n\n\n\n ${pepito.faq_answer}`

        })

        return pregunton



    }



}
