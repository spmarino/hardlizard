let homePage = require('./homePage')
let enCartelera = require('./enCartelera')
let sucursales = require('./sucursales')
let superVotadas = require('./masVotadas')

let megaVotadas = superVotadas.leerJSON()
let movies = homePage.leerJSON()
let cartelera = enCartelera.leerJSON()
let sucursaless = sucursales.leerJSON()


module.exports = {
    homePage: function (req, res) {
        movies.movies.forEach(movie => {
            res.write(movie.title + '\n')
        });
        res.end()
    },
    enCartelera: function (req, res) {
        res.write(`/*/*En Cartelera/*/* \n\n Total de Peliculas : ${movies.movies.length}\n\n`)
        cartelera.movies.forEach(movie => {
            res.write(` **${movie.title}** \n\n /${movie.overview}/\n\n`);
        });
        res.end()
    },
    sucursales: function (req, res) {
        res.write('Nuestras Salas');
        res.write('\n\n')
        res.write('Total de salas = 16 ')
        sucursaless.forEach(theaters => {
            res.write('\n\n')
            res.write("Sucursal: " + theaters.name);
            res.write('\n\n')
            res.write("Direccion: " + theaters.address);
            res.write('\n\n')
        });
        res.end()
    },
    contacto: function (req, res) {
        res.end(`   /*/*Contáctenos/*/* \n\n\n 
			¿Tenés algo para contarnos? Nos encanta escuchar a nuestros
			clientes. Si deseas contactarnos podés escribirnos al siguiente email:
			dhmovies@digitalhouse.com o en las redes sociales. Envianos tu consulta,
			sugerencia o reclamo y será respondido a la brevedad posible. Recordá que
			también podes consultar la sección de Preguntas Frecuentes para obtener
			respuestas inmediatas a los problemas más comunes.  `);
    },
    masVotadas: function (req, res) {
        let masVotadas = megaVotadas.filter(function (elemento) {
            return elemento.vote_average >= 7
        })
        masVotadas.sort((a, b) => (a.title > b.title) ? 1 : (a.title < b.title) ? -1 : 0);
        res.write('\n\n')
        let rating = masVotadas.map(function (movie) {
            return megaVotadas.vote_average
        })
        let rTotal = rating.reduce(function (acum, num) {
            return acum + num
        })
        let promedio = rTotal / masVotadas.length
        masVotadas.sort((a, b) => (a.title > b.title) ? 1 : (a.title < b.title) ? -1 : 0);
        res.write("-Total de películas: " + masVotadas.length + "\n\n")
        res.write("-Rating promedio: " + promedio.toFixed(2) + "\n\n")
        masVotadas.forEach(movie => {
            res.write('\n\n')
            res.write("Título: " + movie.title);
            res.write('\n\n')
            res.write("Rating: " + movie.vote_average);
            res.write('\n\n')
            res.write("Reseña: " + movie.overview + "\n\n");
        });
        res.end();
    }
}