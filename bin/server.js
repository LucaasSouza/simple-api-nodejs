const app = require('../src/app');

const normalizaPort = val => {
    const port = parseInt(val, 10)
    return isNaN(port) ? val : port >= 0 ? port : false
}

const port = normalizaPort(process.env.PORT || '3000');

app.listen(port, () => console.log(`app listening on port ${port}`))