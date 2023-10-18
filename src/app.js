const express = require('express');
const app = express();
const cors = require('cors')

//Configuração do app
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Rotas
const routes = [
    {
        url: '/people',
        path: './routes/people.js'
    }
]

routes.forEach(route => app.use(route.url, require(route.path)))

module.exports = app;