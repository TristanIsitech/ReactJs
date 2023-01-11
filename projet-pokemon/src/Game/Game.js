import './Game.css';
import Card from './Card/Card.js'

function Game(props) {

    return (
        <div>
            {props.userInfo.pokemons.map((pokemon, index) => (
                pokemon && <Card pokemon={pokemon} key={index}/>
            ))
            }
        </div>
    )
}

export default Game;
