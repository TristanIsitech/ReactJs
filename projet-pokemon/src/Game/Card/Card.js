import './Card.css';

function Game(props) {

    return (
        <div>
            <h2>name : {props.pokemon.name}</h2>
            <h2>type 1 : {props.pokemon.types[0].type.name}</h2>
            <p>{props.pokemon.stats[0].stat.name} : {props.pokemon.stats[0].base_stat}</p>
            <img src={props.pokemon.sprites.other.home.front_default} />
            <div>
                {props.pokemon.stats.map((stat, index) => (
                    index !== 0 && <p key={index}>{stat.stat.name} : {stat.base_stat}</p>
                ))}
            </div>
        </div>
    )
}

export default Game;
