let pokeapi = {}

pokeapi.getPokemon = (id) => {
    return new Promise((resolve, reject) => {
        fetch("https://pokeapi.co/api/v2/pokemon/" + id + "/")
            .then((resp) => {
                resp.json().then((json) => {
                    return resolve(json)
                })
            })
            .catch((err) => {
                return reject(err)
            })
    })
}

module.exports = pokeapi;