const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('../db/connection');
// import router from '../routes';

class Server {

    constructor() {
        this.app  = express();
        this.port = '3000';

        this.paths = {
            auth:                  '/auth',
            dashboard:             '/dashboard',
            usuarios:              '/dashboard/usuarios',
        } 
        // Métodos iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection() {

        try {
            
            await db.authenticate();
            console.log('Database online');

        } catch (error) {
            throw  error;
        }

    }

    middlewares() {
        // CORS
        this.app.use( cors() );

        // Lectura del body
        this.app.use( express.json() );

        // Configurar body-parser para analizar datos de formularios HTML
        this.app.use(bodyParser.urlencoded({ extended: true }));

        //Configuramos el motor de plantillas
        this.app.set("view engine", "ejs");

        // Carpeta pública
        this.app.use( express.static('public') );

    }
    
    
    routes() {
        this.app.use(this.paths.auth,       require('../routes/auth'));
        this.app.use(this.paths.dashboard,  require('../routes/dashboard'));
        this.app.use(this.paths.usuarios,   require('../routes/usuarios'));
    }


    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port );
        })
    }

}

module.exports = Server;