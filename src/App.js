import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'X';
const PLAYER_2 = 'O';
let xTurn = true; 

const generateSquares = () => {
  const squares = [];

  let currentId = 0;

  for (let row = 0; row < 3; row += 1) {
    squares.push([]);
    for (let col = 0; col < 3; col += 1) {
      squares[row].push({
        id: currentId,
        value: '',
      });
      currentId += 1;
    }
  }

  return squares;
}

const App = () => {

  const [squares, setSquares] = useState(generateSquares());

  

  const updateSquare = (squareId) => {

    const updatedSquares = [];
    
    squares.forEach ( (row) => {
      for (const square in row){
        if(row[square].id === squareId){
          //row[square].value = "?"
          // TODO: finish wave 2

          // if value at square is empty, it could be either x or o's turn
          if(row[square].value === ""){
            if(xTurn){
              row[square].value = PLAYER_1;
              xTurn = false;
            } else {
              row[square].value = PLAYER_2;
              xTurn = true;
            }
          }
        }
      }
      updatedSquares.push(row);
    });

    setSquares(updatedSquares);
  }

  const checkForWinner = () => {
    // Complete in Wave 3

  }

  const resetGame = () => {
    // Complete in Wave 4
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is ... -- Fill in for wave 3 </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSquare}/>
      </main>
    </div>
  );
}

export default App;
