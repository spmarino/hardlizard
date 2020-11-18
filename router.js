const index = require('./src/index')


module.exports = function(req, res) {
    switch (req.url) {
        case '/':
            index.homePage(req, res)
            break;
        case '/en-cartelera':
<<<<<<< HEAD
            index.enCartelera(req, res)
            break;
        case '/sucursales':
            index.sucursales(req, res)
=======
            index.enCartelera(req,res)
            break;
        case '/contacto':
            index.contacto(req,res)
            break
        case '/masVotadas.js':
            index.masVotadas(req,res)
            break
>>>>>>> ade532d1a3525da6cb4b98f909f73cfd2ff1556e
        default:
            break;
    }
}