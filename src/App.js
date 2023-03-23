import { useState } from 'react';
import './App.css';

function App() {
  const [xIsNext, setXIsNext] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(null))

  function handleClick(i){
    if(squares[i] || calculateWinner(squares)){
      return
    }
    const nextSquare = squares.slice()
    console.log(xIsNext,squares,nextSquare)
    if(xIsNext){
      nextSquare[i] = 'X'
    }
    else{
      nextSquare[i] = 'O'
    }
    setSquares(nextSquare)
    setXIsNext(!xIsNext)
  }

  // check who is winner
  const winner = calculateWinner(squares);
  let status;
  if(winner){
    status = "Winner is player " + winner;
  }
  else{
    status = "Next Player " + (xIsNext? 'X' : 'O');
  }


  return (
    <div className="App">
      <div>
        <h1>{status}</h1>
      <div className="row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}></Square>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} ></Square>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} ></Square>
      </div>
      <div className="row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} ></Square>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} ></Square>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} ></Square>
      </div>
      <div className="row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} ></Square>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} ></Square>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} ></Square>
      </div>
      </div>
    </div>
  );
}

//  function for btn
function Square({value,onSquareClick}){

  return <button className='square' onClick={onSquareClick}>{value}</button>
}


// check winner function
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <App></App>
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}

export default Game;