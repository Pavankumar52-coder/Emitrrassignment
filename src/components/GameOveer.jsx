import React from "react";

const GameOver=({handleClick,abc})=>{
    return (
        <div id="game-over">
        <h1>Game Over!</h1>
        <p>Try Again?</p>
        <button onClick={()=>{handleClick()}}id="restart-button">Restart</button>
        </div>

    );
}
export default GameOver;