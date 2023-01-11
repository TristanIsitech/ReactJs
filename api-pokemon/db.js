const mysql = require('mysql');
//const Sha512 = require("crypto-js/sha512")
//const Hex = require("crypto-js/enc-hex")

const pool = mysql.createPool({
    connectionLimit: 10,
    passworld: '',
    user: 'root',
    database: 'pokemonv2',
    host: 'localhost',
    port: '3306'
})

let dbpokemon = {};

dbpokemon.medecin = () => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT id, nom, prenom as 'prénom', adresse, tel as 'téléphone', specialitecomplementaire as 'spécialité complémentaire', 
        departement as 'département' FROM medecin`, (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })
}

dbpokemon.offre = () => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM offrir ORDER BY idRapport`, (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })
}

module.exports = dbpokemon;