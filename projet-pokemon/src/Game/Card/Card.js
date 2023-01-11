import './Card.css';

function Game(props) {
    const moveACard = () => {
        props.moveCard(props.index)
    }

    return (
        <div className={props.pokemon.types[0].type.name + ' card position' + props.position} onClick={moveACard}>
            <div className='title'>
                <p className='hp'>{props.pokemon.stats[0].stat.name} : {props.pokemon.stats[0].base_stat}</p>
                <h1>{props.pokemon.name}</h1>
            </div>
            <h2>type : {props.pokemon.types[0].type.name}</h2>
            <img src={props.pokemon.sprites.other.home.front_default} />
            <div className='stats'>
                {props.pokemon.stats.map((stat, index) => (
                    index !== 0 && <p className='stat' key={index}>{stat.stat.name} : {stat.base_stat}</p>
                ))}
            </div>
        </div>
    )
}

export default Game;
