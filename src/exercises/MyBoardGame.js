

import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const rowStyle = {
  display: 'flex'
}

const squareStyle = {
  'width':'60px',
  'height':'60px',
  'backgroundColor': '#ddd',
  'margin': '4px',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'fontSize': '20px',
  'color': 'white'
}

const boardStyle = {
  'backgroundColor': '#eee',
  'width': '208px',
  'alignItems': 'center',
  'justifyContent': 'center',
  'display': 'flex',
  'flexDirection': 'column',
  'border': '3px #eee solid'
}

const containerStyle = {
  'display': 'flex',
  'alignItems': 'center',
  'flexDirection': 'column'
}

const instructionsStyle = {
  'marginTop': '5px',
  'marginBottom': '5px',
  'fontWeight': 'bold',
  'fontSize': '16px',
}

const buttonStyle = {
  'marginTop': '15px',
  'marginBottom': '16px',
  'width': '80px',
  'height': '40px',
  'backgroundColor': '#8acaca',
  'color': 'white',
  'fontSize': '16px',
}

function Square({dataPosition, handleBoxClick, board}) {

  const x = 'x';
  const oo = 'o';
  return (
    <div
      className="square"
      style={squareStyle}
      data-position={dataPosition}
      onClick={() => handleBoxClick(dataPosition)}
      >
        { (board[dataPosition] !== null) ? (board[dataPosition] === 1? x : oo) : ''}
    </div>
  );
}

function Board() {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xoro, setxoro] = useState(1)
  const [winner, setWinner] = useState(null);

  const handleBoxClick = (position) => {

      if(board[position] !== null) {
        return
      }
      let copyBoard = [...board];
      
      copyBoard[position] = xoro;
      setxoro(xoro === 1 ? -1 : 1);
      setBoard(copyBoard);
  }

  const checkWinner = () => {

    for(let i=0; i<3; i++){
      if(board[i] !== null){
        
        if((i+3)<9 && (i+6)<9 && board[i+3] === board[i] && board[i+6] === board[i]){
          return board[i];
        }
      }
    }

    for(let i=0; i<7; i=i+3){
      if(board[i] !== null){
        
        if((i+1)<9 && (i+2)<9 && board[i+1] === board[i] && board[i+2] === board[i]){
          return board[i];
        }
      }
    }

    if(board[0] === board[4] && board[0] === board[8]){
      return board[0];
    }

    if(board[2] === board[4] && board[2] === board[6]){
      return board[2];
    }

    return null;
  }

  useEffect(() => {
    setWinner(checkWinner())
  }, board)

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setxoro(1);
    setWinner(null);
  }

  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>Next player: <span>{xoro === 1 ? 'x' : 'o'}</span></div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>Winner: <span>{winner === null ? 'None' : (winner === 1 ? 'x' : 'o')}</span></div>
      <button style={buttonStyle} onClick={handleReset}>Reset</button>
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
          <Square dataPosition={0} handleBoxClick={handleBoxClick} board={board}/>
          <Square dataPosition={1} handleBoxClick={handleBoxClick} board={board}/>
          <Square dataPosition={2} handleBoxClick={handleBoxClick} board={board}/>
        </div>
        <div className="board-row" style={rowStyle}>
          <Square dataPosition={3} handleBoxClick={handleBoxClick} board={board}/>
          <Square dataPosition={4} handleBoxClick={handleBoxClick} board={board}/>
          <Square dataPosition={5} handleBoxClick={handleBoxClick} board={board}/>
        </div>
        <div className="board-row" style={rowStyle}>
          <Square dataPosition={6} handleBoxClick={handleBoxClick} board={board}/>
          <Square dataPosition={7} handleBoxClick={handleBoxClick} board={board}/>
          <Square dataPosition={8} handleBoxClick={handleBoxClick} board={board}/>
        </div>
      </div>
    </div>
  );
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}

export default Game;
// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<Game />);