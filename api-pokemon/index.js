// Importer les modules
const app = require('express')()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const db = require('./db.js')
const pokeapi = require('./pokeapi.js')

// Definir le header
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*") //http://localhost:3000")
    res.header("Access-Control-Allow-Methods", "*")
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

// Route de connection 
app.get('/api/connectUser', async (req, res) => {
    let st = 200
    try {
        results = await db.connection(req.query)
        if (results[0]) {
            results = {
                id: results[0].id,
                pseudo: results[0].pseudo,
                champion: results[0].champion,
                pokemons: [
                    results[0].poke_id1,
                    results[0].poke_id2,
                    results[0].poke_id3,
                    results[0].poke_id4,
                    results[0].poke_id5,
                    results[0].poke_id6
                ]
            }
            if (results.pokemons[0]) {
                results.pokemons[0] = await pokeapi.getPokemon(results.pokemons[0])
            } else {
                results.pokemons[0] = null
            }
            if (results.pokemons[1]) {
                results.pokemons[1] = await pokeapi.getPokemon(results.pokemons[1])
            } else {
                results.pokemons[1] = null
            }
            if (results.pokemons[2]) {
                results.pokemons[2] = await pokeapi.getPokemon(results.pokemons[2])
            } else {
                results.pokemons[2] = null
            }
            if (results.pokemons[3]) {
                results.pokemons[3] = await pokeapi.getPokemon(results.pokemons[3])
            } else {
                results.pokemons[3] = null
            }
            if (results.pokemons[4]) {
                results.pokemons[4] = await pokeapi.getPokemon(results.pokemons[4])
            } else {
                results.pokemons[4] = null
            }
            if (results.pokemons[5]) {
                results.pokemons[5] = await pokeapi.getPokemon(results.pokemons[5])
            } else {
                results.pokemons[5] = null
            }
        }
        else { results = null }
        st = 200
    } catch (e) {
        console.log(e)
        results = e
        st = 500
    }
    app.affiche(req.ip, st, 'connectUser')
    res.status(st).send(results)
})

// Route de creation d'utilisateur 
app.post('/api/createUser', jsonParser, async (req, res) => {
    let st = 200
    try {
        results = await db.notUser(req.body.id)
        if (results == null || results == []) {
            results = await db.createConnection(req.body)
            st = 200
        }
        else {
            results = "This user already exist !"
            st = 409
        }
    } catch (e) {
        console.log(e)
        results = e
        st = 500
    }
    app.affiche(req.ip, st, 'createUser')
    res.status(st).send(results)
})

// Route pour recuperer un pokemon random
app.get('/api/randomPokemon', async (req, res) => {
    let st = 200
    let random = Math.floor(Math.random() * 905)
    try {
        results = await pokeapi.getPokemon(random)
    } catch (e) {
        console.log(e)
        results = e
        st = 500
    }
    app.affiche(req.ip, st, 'randomPokemon')
    res.status(st).send(results)
})

// Route pour ajouter les pokemons
app.put('/api/addPokemons', jsonParser, async (req, res) => {
    let st = 200
    results = ''
    try {
        req.body.tab.forEach(async (pokemon, id) => {
            results[id] = await db.addPokemon(req.body.id, id + 1, pokemon)
        });
    } catch (e) {
        console.log(e)
        results = e
        st = 500
    }
    app.affiche(req.ip, st, 'addPokemons')
    res.status(st).send(results)
})

app.affiche = (ip, st, path) => {
    let date = new Date()
    let heures = date.getHours()
    let minutes = date.getMinutes()
    let secondes = date.getSeconds()
    let jour = date.getUTCDate()
    let mois = date.getMonth() + 1
    let annee = date.getFullYear()

    console.log(`IP : ${ip.substr(7)} | DATE : ${jour >= 10 ? jour : '0' + jour}/${mois >= 10 ? mois : '0' + mois}/${annee} | HEURE : ${heures >= 10 ? heures : '0' + heures}:${minutes >= 10 ? minutes : '0' + minutes}:${secondes >= 10 ? secondes : '0' + secondes} | PATH : /api/${path} | RESULTS : ${st}`)
}