import './App.css';
import {useState, useEffect} from 'react';
import Board from './components/Board';
const emptyBoard = Array.from({length: 9});

function App() {

  const [board, setBoard] = useState(emptyBoard);
  const [userTurn, setUserTurn] = useState(Math.random() < .5 ? true : false);
  const [sets, setSets] = useState([])
  const [message, setMessage] = useState(`${userTurn ? "❌" : "⭕"} Goes First!`)

  const parseBoard = currentBoard => {
    let horizontal = Array.from({length: 3}, v => []);
    let vertical = Array.from({length: 3}, v => []);
    let diagonal = Array.from({length: 2}, v => []);
    currentBoard.forEach( (v,i) => {
      vertical[i % 3 === 0 ? 0 : i % 3 === 2 ? 2 : 1].push(v);      
      horizontal[Math.floor(i / 3)].push(v);
      if (i % 4 === 0) diagonal[0].push(v);
      if (i % 2 === 0 && i > 0 && i < 8) diagonal[1].push(v);
    })
    let parsedBoard = [...horizontal, ...vertical, ...diagonal];
    return parsedBoard;
  }
  useEffect( () => {
    const testSets = parseBoard(board);
    setSets(testSets);
    console.log(testSets);
    testSets.forEach( set => {    
    if (set.reduce( (p,v,i,a) => p && v && (i === 0 || v === a[i-1]) ? true : false, true )) {
      console.log("Winner!")
      return;
    }
  })
  },[board])

  const selectCell = (e,index) => {
    if (!board[index]) {
      let updatedBoard = [...board];
      updatedBoard[index] = userTurn ? "❌" : "⭕";
      setBoard(updatedBoard);
      setUserTurn(!userTurn);
      setMessage(`${userTurn ? "⭕" : "❌" }'s Turn to Pick!`)
    }
  }

  return (
    <div className="App">   
      <h1>{message}</h1>   
      <div id="board">
      <Board board={board} selectCell={selectCell} />
      </div>
    </div>
  );
}

export default App;
