let homePage = require('./homePage')
let enCartelera = require('./enCartelera')

let movies = homePage.leerJSON()
let cartelera = enCartelera.leerJSON()

module.exports = {
    homePage : function(req,res){
        movies.movies.forEach(movie => {
            res.write(movie.title +'\n')
        });
        
        res.end()
    },
    enCartelera : function(req,res){
        cartelera.movies.forEach(movie => {
            res.write(` **${movie.title}** \n\n /${movie.overview}/\n\n`);
        });

        res.end()

    },
    contacto : function(req,res){
        res.end(`   /*/*Contáctenos/*/* \n\n\n 
			¿Tenés algo para contarnos? Nos encanta escuchar a nuestros
			clientes. Si deseas contactarnos podés escribirnos al siguiente email:
			dhmovies@digitalhouse.com o en las redes sociales. Envianos tu consulta,
			sugerencia o reclamo y será respondido a la brevedad posible. Recordá que
			también podes consultar la sección de Preguntas Frecuentes para obtener
			respuestas inmediatas a los problemas más comunes.  `);
        
    },

}