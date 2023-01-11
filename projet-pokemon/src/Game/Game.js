import './Game.css';
import Card from './Card/Card.js'
import Savage from './Savage/Savage.js'

function Game(props) {
    const positioning = (index) => {
        const filtered = props.userInfo.pokemons.filter((element) => {
            return element !== null
        })
        switch (filtered.length) {
            case 1:
                return 0
            case 2:
                if (index === 0) {
                    return 3
                } else {
                    return 4
                }
            case 3:
                switch (index) {
                    case 0: return 3
                    case 1: return 0
                    default: return 4
                }
            case 4:
                switch (index) {
                    case 0: return 2
                    case 1: return 3
                    case 2: return 4
                    default: return 5
                }
            case 5:
                switch (index) {
                    case 0: return 1
                    case 1: return 2
                    case 2: return 0
                    case 3: return 5
                    default: return 6
                }
            case 6:
                switch (index) {
                    case 0: return 1
                    case 1: return 2
                    case 2: return 3
                    case 3: return 4
                    case 4: return 5
                    default: return 6
                }
            default:
        }
    }

    const getARandomCard = () => {
        console.log(1)
    }

    return (
        <div className='game'>
            <Savage></Savage>
            <div className='hand'>
                {props.userInfo.pokemons.map((pokemon, index) => (
                    pokemon && <Card pokemon={pokemon} key={index} position={positioning(index)} />
                ))
                }
            </div>
        </div>
    )
}

export default Game;
