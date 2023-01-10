// Importer les modules
const app = require('express')()
const fs = require('fs')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const { exec } = require("child_process");

// Definir le header
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

// Cree une route pour la page d'accueil '/'
app.get('/', (req, res) => {
    res.send("Hello")
})

// =====================
// Root pour status.json
// =====================

const pathStatus = 'json/status.json'
let Status = JSON.parse(fs.readFileSync(pathStatus, "utf8"))

// GET status
app.get('/status', (req, res) => {
    let heures = new Date().getHours()
    let minutes = new Date().getMinutes()
    let secondes = new Date().getSeconds()
    console.log(`${heures}:${minutes}:${secondes} - GET http://localhost:${PORT}/status : ` + 200)
    res.status(200).send(Status)
})

// Maj 1 Status avec id 
app.post('/status/simple', jsonParser, (req, res) => {
    let heures = new Date().getHours()
    let minutes = new Date().getMinutes()
    let secondes = new Date().getSeconds()
    const contenu = req.body
    if (contenu.id == null || contenu.etat == null || contenu.locked == null) {
        console.log(`${heures}:${minutes}:${secondes} - POST http://localhost:${PORT}/status/simple : ` + 400)
        res.sendStatus(400)
        return
    }
    Status[parseInt(contenu.id) - 1] = contenu
    fs.writeFileSync(pathStatus, JSON.stringify(Status))

    console.log(`${heures}:${minutes}:${secondes} - POST http://localhost:${PORT}/status/simple : ` + 200)
    res.status(200).send("OK")
})

// Maj all status
app.post('/status/all', jsonParser, (req, res) => {
    let heures = new Date().getHours()
    let minutes = new Date().getMinutes()
    let secondes = new Date().getSeconds()
    const contenu = req.body
    if (contenu.lenght != Status.lenght) {
        console.log(`${heures}:${minutes}:${secondes} - POST http://localhost:${PORT}/status/all : ` + 400)
        res.sendStatus(400)
        return
    }
    Status = contenu
    fs.writeFileSync(pathStatus, JSON.stringify(Status))

    console.log(`${heures}:${minutes}:${secondes} - POST http://localhost:${PORT}/status/all : ` + 200)
    res.status(200).send("OK")
})

// Demarrer le porgramme
app.get('/startadmin', jsonParser, (req, res) => {
    let heures = new Date().getHours()
    let minutes = new Date().getMinutes()
    let secondes = new Date().getSeconds()
    exec("node-red")
    const async_interv = async function() {
        let interv = setInterval(() => {
            exec("start http://localhost:1880/ && exit")
            clearInterval(interv)
        }, 500)
    }
    async_interv()
        .then(console.log(`${heures}:${minutes}:${secondes} - POST http://localhost:${PORT}/startadmin : ` + 200))
        .then(res.status(200).send("OK"))
})

// app.get('/start', jsonParser, (req, res) => {
//     let heures = new Date().getHours()
//     let minutes = new Date().getMinutes()
//     let secondes = new Date().getSeconds()
//     exec("node-red")
//     async_interv()
//         .then(console.log(`${heures}:${minutes}:${secondes} - POST http://localhost:${PORT}/start : ` + 200))
//         .then(res.status(200).send("OK"))
// })

// Port et message de démarrage
const PORT = 5400

app.listen(PORT, () => {
    let heures = new Date().getHours()
    let minutes = new Date().getMinutes()
    let secondes = new Date().getSeconds()
    console.log('=================================================================')
    console.log(`Application démarrée à ${heures}:${minutes}:${secondes} à l\'adresse http://localhost:${PORT}`)
    console.log('=================================================================')
})