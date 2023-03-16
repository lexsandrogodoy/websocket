import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { socketController } from '../sockets/controller.js';

class Servidor {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        //this.server = require('http').createServer(this.app);
        //this.io = require('socket.io')(this.server);
        this.server = createServer(this.app);
        this.io = new Server(this.server);

        this.paths = { }

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();

        //Sockets
        this.sockets();
    }


    middlewares() {

        // CORS
        this.app.use( cors() );

        // Directorio Público
        this.app.use( express.static('public') );

    }

    routes() {
        //this.app.use( this.paths.auth, require('../routes/auth'));
    }

    sockets(){
        this.io.on('connection', socketController); 
    }

    listen() {
        this.server.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}

export {
    Servidor
}