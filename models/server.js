const express = require('express');
const cors = require('cors');

<<<<<<< HEAD
=======

>>>>>>> nuevoComienzo
const { socketController } = require('../sockets/controller');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);

<<<<<<< HEAD
        this.paths = {};
=======

        this.paths = {}
>>>>>>> nuevoComienzo

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();

        // Sockets
        this.sockets();
    }

    middlewares() {

        // CORS
        this.app.use(cors());

        // Directorio Público
        this.app.use(express.static('public'));
<<<<<<< HEAD
=======

>>>>>>> nuevoComienzo
    }

    routes() {

<<<<<<< HEAD
        // this.app.use(this.paths.auth, require('../routes/auth'));
=======
        // this.app.use(this.paths.uploads, require('../routes/uploads'));

>>>>>>> nuevoComienzo
    }

    sockets() {

<<<<<<< HEAD
        this.io.on('connection', socketController);

    }

=======
        this.io.on('connect', socketController);

    }


>>>>>>> nuevoComienzo
    listen() {
        this.server.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}

<<<<<<< HEAD
=======

>>>>>>> nuevoComienzo
module.exports = Server;