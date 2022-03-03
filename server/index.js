const express = require('express');

class server {

  constructor() {

    this.app = express();
    this.pathUsuarios = '/api/v1/usuarios';
    this.listen();

  }

  listen() {
    this.app.listen(process.env.PORT);
    console.log(`Server running on port ${process.env.PORT}`);
  }

  routes() {
    this.app.use(this.pathUsuarios, require('./routes/user'));
  }
}

module.exports = server;