const fs = require('fs');

module.exports = {
    bd : './data/movies.json',
    leerJSON : function(){
        return JSON.parse(fs.readFileSync(this.bd,'utf-8'));
    }, 
    totalPelis : function(){
        let cartelera = this.leerJSON()
        let pelis = cartelera.movies.length

        return pelis
    },

    cartelera : function (){
        let cartelera = this.leerJSON()
        let pelis = cartelera.movies.sort((a, b) => (a.title > b.title) ? 1 : (a.title < b.title) ? -1 : 0);
        
       let cartelerafinal = cartelera.movies.forEach(movie => {
            return ` ${movie.title} \n\n ${movie.overview}`
        });
        return cartelerafinal


    }
}