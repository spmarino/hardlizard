let homePage = require('./homePage')
let enCartelera = require('./enCartelera')
let sucursales = require('./sucursales')

let movies = homePage.leerJSON()
let cartelera = enCartelera.leerJSON()
let sucursales = sucursales.leerJSON()

module.exports = {
    homePage: function(req, res) {
        movies.movies.forEach(movie => {
            res.write(movie.title + '\n')
        });

        res.end()
    },
    enCartelera: function(req, res) {
        cartelera.movies.forEach(movie => {
            res.write(` **${movie.title}** \n\n /${movie.overview}/\n\n`);
        });

        res.end()

    },
    sucursales: function(req, res) {
        res.write('Nuestras Salas');
        res.write('\n\n')
        res.write('Total de salas = 16 ')
        theaters.forEach(theaters => {
            res.write('\n\n')
            res.write("Sucursal: " + theaters.name);
            res.write('\n\n')
            res.write("Direccion: " + theaters.address);
            res.write('\n\n')
        });
        res.end()
    }
}