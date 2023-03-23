import { useState } from 'react';
import './App.css';

function App({xIsNext,squares,onPlay}) {

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
    onPlay(nextSquare)
  }

  // check who is winner
  const winner = calculateWinner(squares);
  let status;
  if(winner){
    status = "Winner is player " + winner;
  }
  else{
    status = "Next Player: " + (xIsNext? 'X' : 'O');
  }


  return (
    <div className="App">
      <div>
        <h1 className={'text-white'}>{status}</h1>
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
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0)
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares){
    const nextHistory = [...history.slice(0,currentMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }

  function JumpTo(nextMove){
    setCurrentMove(nextMove)
  }

  const moves = history.map((squares , move) => {
    let description;
    if(move > 0){
      description = "Go to move #" + move;
    }
    else{
      description = "Go to start game";
    }

    return (
      <li key={move} className={'text-white fs-4'}>
        <button onClick={()=>JumpTo(move)} className={'btn btn-primary mb-1'}>{description}</button>
      </li>
    )
  });

  return (
    <div className={'game'}>
      <div className="game-board">
        <App xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}></App>
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default Game;