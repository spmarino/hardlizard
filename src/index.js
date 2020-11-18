let homePage = require('./homePage')
let enCartelera = require('./enCartelera')
const contacto = require('./contacto')
const masVotadas = require('./masVotadas')
const sucursalesRequeridas = require('./sucursales')
const preguntasFrecuentes = require('./preguntasFrecuentes')


let movies = homePage.leerJSON()
let cartelera = enCartelera.leerJSON()
let votos = masVotadas.leerJSON()
let sucursales = sucursalesRequeridas.leerJSON()
let preguntas = preguntasFrecuentes.leerJSON()

module.exports = {
    homePage: function(req, res) {
        movies.movies.forEach(movie => {
            res.write(movie.title + '\n')
        });

        res.end()
    },
    enCartelera: function(req, res) {
        res.write(`/*/*En Cartelera/*/* \n\n Total de Peliculas : ${movies.movies.length}\n\n`)
        cartelera.movies.forEach(movie => {
            res.write(` **${movie.title}** \n\n /${movie.overview}/\n\n`);
        });

        res.end()
    },
    contacto: function(req, res) {
        res.end(`Contacto ${contacto}`);

    },

    masVotadas: function(req, res) {

        let movieSevenForUp = votos.movies.filter(function(movie) {
            return movie.vote_average >= 7;
        });

        let rankingPromedio = movieSevenForUp.map(function(ranking) {
            return ranking.vote_average;
        });

        let sumaRanking = rankingPromedio.reduce(function(acum, num) {
            return (acum + num);
        });

        let promedioRanking = sumaRanking / movieSevenForUp.length;

        let rankingDosDecimales =
            promedioRanking.toFixed(2);

        res.write(`Total Promedio ${rankingDosDecimales}`);
        res.write(`/*/*Mas Votadas/*/* \n\n Promedio : ${rankingDosDecimales} \n\n Total de peliculas ${movieSevenForUp.length} \n\n `)
        movieSevenForUp.sort((a, b) => (a.vote_average < b.vote_average) ? 1 : (a.vote_average > b.vote_average) ? -1 : 0);
        movieSevenForUp.forEach(movie => {
            res.write(` **${movie.title}** Valoración /${movie.vote_average}/\n ${movie.overview}\n\n`)
        });

        res.end()

    },
    sucursales: function(req, res) {
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
    preguntasFrecuentes: function(req, res) {
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