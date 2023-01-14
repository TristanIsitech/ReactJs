import './Help.css'
import React from 'react'

function Help() {

    return (
        <div className='help'>
            <h1> Regles du jeu </h1>
            <p>Pour jouer, commencer par appuyer sur le bouton 'GET A RANDOM CARD', vous optiendrez un pokemon aléatoire. </p>
            <p>Si ce pokemon vous intéresse, vous pouvez appuyer sur le bouton plus en bas a droite pour l'ajouter a votre main.</p>
            <p>Dans le cas contraire, vous pouvez chosir de tirer un nouveau pokemon aléatoirement.</p>
            <br />
            <p>Vous ne pouvez posséder que 6 pokemons au maximun. </p>
            <p>Si vous en avez deja 6, vous pouvez tout de même continuer de tirer des pokemons aléatoirement, pour les ajouter a votre main, vous devrez donc les échanger avec des pokemons de votre main.</p>
            <p>Pour échanger un pokemon de votre main avec un pokemon tirer aléatoirement, il vous suffit de cliquer sur le pokemon de votre main que vous souhaitez échanger.</p>
            <p>Pour enlever le pokemon qui se situe, cliquer dessus. Attention, cette action est définitive.</p>
            <br />
            <p>De plus, vous pouvez consulter les cartes de votre main quand vous le souhaitez, en cliquant dessus, et les replacer dans votre main et recliquant dessus. </p>
        </div>
    )
}

export default Help
