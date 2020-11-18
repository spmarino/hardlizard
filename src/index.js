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

    }
}