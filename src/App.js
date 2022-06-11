import './App.css';
import {useState, useEffect} from 'react';
import Cell from './components/Cell';
const emptyBoard = Array.from({length: 9})//, (v,i) => i);

function App() {

  const [board, setBoard] = useState(emptyBoard);
  const [userTurn, setUserTurn] = useState(true)//(Math.random() < .5 ? true : false);
  const [sets, setSets] = useState([])

  const parseBoard = currentBoard => {
    let horizontal = Array.from({length: 3}, v => []);
    let vertical = Array.from({length: 3}, v => []);
    let diagonal = Array.from({length: 2}, v => []);
    // console.log("horizontal", horizontal, "vertical", vertical, "diagonal", diagonal)
    currentBoard.forEach( (v,i) => {
      vertical[i % 3 === 0 ? 0 : i % 3 === 1 ? 2 : 1].push(v);      
      horizontal[Math.floor(i / 3)].push(v);
      if (i % 4 === 0) diagonal[0].push(v);
      if (i % 2 === 0 && i > 0 && i < 8) diagonal[1].push(v);
      // console.log("horizontal", horizontal, "vertical", vertical, "diagonal", diagonal)
    })
    setSets([...vertical, ...horizontal, ...diagonal]);
  }
  useEffect( () => {
    parseBoard(board)    
  },[board])

  const selectCell = (e,index) => {
    console.log(board[index] ? true : false, board[index])
    if (userTurn && !board[index]) {
      let updatedBoard = [...board];
      updatedBoard[index] = "X"
      setBoard(updatedBoard);

    }
  }

  const buildBoard = currentBoard => {
    let cells = currentBoard.map( (v,i) => <Cell index={i} selectCell={selectCell} board = {board} key={i}>{v}</Cell>);
    let rows = Array.from({length: 3}, v=> []);
    cells.forEach( (v,i) => rows[Math.floor(i / 3)].push(v))
    return rows.map( (v,i) => <div key={`r${i}`} className="row">{v}</div>)
    }
  

  return (
    <div className="App">      
      <div id="board">
      {buildBoard(board)}
      </div>
      <div onClick={() => console.log("hello")}>testing</div>
    </div>
  );
}

export default App;
