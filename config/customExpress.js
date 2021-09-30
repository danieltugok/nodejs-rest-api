const express = require('express');
const routers = require('../routers/index');


class App {
    constructor(){
        this.app = express();
        this.middlewares();
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({
            extended: true
        }));

        this.app.use('/', routers); 

    }

}

module.exports = new App().app;


// module.exports = () => {
//     const app = express();

//     app.use(express.json());
//     app.use(express.urlencoded({
//         extended: true
//     }));

//     app.use('/', routers);

//     return app;
// }


