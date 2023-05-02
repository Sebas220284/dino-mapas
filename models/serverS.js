const { dirname,join} = require('path');
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const Sockets = require('./sokets');
const { fileURLToPath } = require('url');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8000;
    const __dirname = dirname(__filename);

    console.log(__dirname);

    // http server
    this.server = http.createServer(this.app);

    // configuraciones de sockts
    this.io = socketio(this.server, {});
  }

  consfigurarSockets() {
    new Sockets(this.io);
  }

  middlewares() {
this.app.use(express.static(join(__dirname,'../client-fron/build')))
  }

  execute() {
    // inicializar middlewares
    this.middlewares();

    // inicializar sockets
    this.consfigurarSockets();

    this.server.listen(this.port, () => {
      console.log('server corriendo', this.port);
    });
  }
}

module.exports = Server;
