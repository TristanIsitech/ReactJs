// Importer les modules
const app = require('express')()
// const bodyParser = require('body-parser')
// const { resolveSoa } = require('dns')
// const jsonParser = bodyParser.json()
const db = require('./db.js')

// Definir le header
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://localhost:3000")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

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

// Cree une route pour la page d'accueil '/'
app.get('/', (req, res) => {
    let st = 200
    app.affiche(req, st)
    res.send("Hello")
})

// Route pour rechercher les données de la base de donnée
app.post('/donnees', async(req, res) => {
    const contenu = req.body
    console.log(contenu.id)
    let results = {}
    let st = null

    try {
        results = await db.visite(contenu.id)
        st = 200
    } catch (e) {
        console.log(e)
        results = e
        st = 500
    }
    app.affiche(req.ip, st)
    res.status(st).send(results)
})

app.affiche = (ip, st) => {
    let date = new Date()
    let heures = date.getHours()
    let minutes = date.getMinutes()
    let secondes = date.getSeconds()
    let jour = date.getDay()
    let mois = date.getMonth()
    let annee = date.getFullYear()
    console.log(ip)
    console.log(`IP : ${ip} | DATE : ${jour >= 10 ? jour : '0' + jour}/${mois >= 10 ? mois : '0' + mois}/${annee} | HEURE : ${heures >= 10 ? heures : '0' + heures}:${minutes >= 10 ? minutes : '0' + minutes}:${secondes >= 10 ? secondes : '0' + secondes} | RESULTS : ${st}`)
}