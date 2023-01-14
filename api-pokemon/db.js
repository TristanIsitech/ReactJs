const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    passworld: '',
    user: 'root',
    database: 'pokemonv2',
    host: 'localhost',
    port: '3306'
})

let dbpokemon = {};

dbpokemon.connection = (reqQuery) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM player WHERE id='` + reqQuery.id + `' AND psw='` + reqQuery.psw + `'`, (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })
}

dbpokemon.notUser = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM player WHERE id='` + id + `'`, (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })
}

dbpokemon.createConnection = (body) => {
    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO player(id, pseudo, psw, champion) VALUES ('` + body.id + `', '` + body.pseudo + `', '` + body.psw + `', false)`, (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })
}

dbpokemon.addPokemon = (id, num, idpoke) => {
    return new Promise((resolve, reject) => {
        pool.query(`UPDATE player SET poke_id` + num + ` = '` + idpoke + `' WHERE id = '` + id + `'`, (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })
}

module.exports = dbpokemon;