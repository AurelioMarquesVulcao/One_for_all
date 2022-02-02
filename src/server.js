const express = require("express");
const cors = require("cors");

const app = express()

class App {
  constructor() {   
    this.database();
    this.middlewares();
    this.routes();
    
    // use o numero final do seu servidor após o 33
    app.listen(3338, () =>
      console.log(`Sua API REST está funcionando na porta 3338 `)
    );
  }

  database() {
    // mongoose.connect(db.uri, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });
  }

  middlewares() {
    app.use(express.json());
    app.use(cors());
  }

  routes() {
    app.use(require("./routes"));
  }
}
module.exports = new App();