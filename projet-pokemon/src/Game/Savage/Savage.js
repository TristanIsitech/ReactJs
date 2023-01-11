import './Savage.css';

function Game(props) {

    return (
        <div className='savage'>
            <button onClick={props.getARandomCard}></button>
        </div>
    )
}

export default Game;
