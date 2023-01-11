import './Savage.css';

function Game(props) {
    return (
        <div className='savage'>
            <button onClick={props.getARandomCard} className='button'>Get a random card</button>
        </div>
    )
}

export default Game;
