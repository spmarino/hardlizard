let homePage = require('./homePage')
let enCartelera = require('./enCartelera')
const contacto = require('./contacto')
const masVotadas = require('./masVotadas')


let movies = homePage.leerJSON()
let cartelera = enCartelera.leerJSON()
let votos = masVotadas.leerJSON()

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

        let movieSevenForUp = votos.movies.filter(function (movie) {
            return movie.vote_average >= 7;
        });

        let rankingPromedio = movieSevenForUp.map(function (ranking) {
            return ranking.vote_average;
        });

        let sumaRanking = rankingPromedio.reduce(function (acum, num) {
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

    }


}
