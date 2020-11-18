let homePage = require('./homePage')

let movies = homePage.leerJSON()

module.exports = {
    homePage : function(req,res){
        movies.movies.forEach(movie => {
            res.write(movie.title +'\n')
        });
        
        res.end()
    },
    enCartelera : function(req,res){

    },
    masVotadas : function(req,res){
        let masVotadas = movies.filter(function(elemento){
            return elemento.vote_average >= 7
        })
        masVotadas.sort((a, b) => (a.title > b.title)?1:(a.title < b.title)?-1:0);
        res.write('\n\n')
        let rating = masVotadas.map(function(movie){
            return movie.vote_average
        })
        let rTotal = rating.reduce(function(acum,num){
            return acum + num
        })
        let promedio = rTotal / masVotadas.length
        masVotadas.sort((a, b) => (a.title > b.title)?1:(a.title < b.title)?-1:0);
        res.write("-Total de películas: " + masVotadas.length + "\n\n")
        res.write("-Rating promedio: " + promedio.toFixed(2) + "\n\n")

        masVotadas.forEach(movie => {
            res.write('\n\n')
            res.write("Título: " + movie.title );
            res.write('\n\n')
            res.write("Rating: " + movie.vote_average);
            res.write('\n\n')
            res.write("Reseña: " + movie.overview + "\n\n");

        });
        res.end();
    }
}