const express = require('express');
const cors = require('cors');

class server {

  constructor() {

    this.app = express();

    // Rutas de mi Application
    this.pathUsuarios = '/api/v1/usuarios';
    
    this.listen();

    this.midlewares();

    this.routes();

  }

  midlewares() {

    // Cors
    this.app.use(cors());

    // Body parser
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());
  }

  listen() {
    this.app.listen(process.env.PORT);
    console.log(`Server running on port ${process.env.PORT}`);
  }

  routes() {
    this.app.use(this.pathUsuarios, require('../routes/user'));
  }
}

module.exports = server;