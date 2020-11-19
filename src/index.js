const homePage = require('./homePage')
const enCartelera = require('./enCartelera')
const contacto = require('./contacto')
const masVotadas = require('./masVotadas')
const sucursalesRequeridas = require('./sucursales')
const preguntasFrecuentes = require('./preguntasFrecuentes')


let movies = homePage.leerJSON()
let cartelera = enCartelera.leerJSON()
let formula = masVotadas.promedio()
let pelis = masVotadas.totalPeliculas()
let sucursales = sucursalesRequeridas.leerJSON()
let preguntas = preguntasFrecuentes.leerJSON()
let pelisFiltradas = masVotadas.peliculasFiltradas()

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
    contacto: function (req, res) {
        res.end(`Contacto ${contacto}`);

    },

    masVotadas: function (req, res) {
        res.end(`/*/* Mas Votadas /*/* \n\n **Total peliculas** ${pelis}  -Promedio- ${formula} \n\n ${pelisFiltradas}`);
      
    },
    sucursales: function (req, res) {
        res.write('Nuestras Salas');
        res.write('\n\n')
        res.write('Total de salas = 16 ')
        sucursales.theaters.forEach(theaters => {
            res.write('\n\n')
            res.write("Sucursal: " + theaters.name);
            res.write('\n\n')
            res.write("Direccion: " + theaters.address);
            res.write('\n\n')
        });
        res.end()
    },
    preguntasFrecuentes: function (req, res) {
        res.write('Preguntas Frecuentes');
        res.write('\n\n')
        res.write('Preguntas respondidas ' + preguntas.faqs.length)
        preguntas.faqs.forEach(preguntas => {
            res.write('\n\n')
            res.write("Título: " + preguntas.faq_title);
            res.write('\n\n')
            res.write("Rating: " + preguntas.faq_answer);
            res.write('\n\n')
        });
        res.end()
    }


}