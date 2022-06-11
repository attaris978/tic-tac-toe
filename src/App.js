import './App.css';
import {useState, useEffect} from 'react'

const emptyBoard = Array.from({length: 9}, (v,i) => i);

function App() {

  const [board, setBoard] = useState(emptyBoard);
  const [userTurn, setUserTurn] = useState(Math.random() < .5 ? true : false);
  const [sets, setSets] = useState([])

  const parseBoard = currentBoard => {
    let horizontal = Array.from({length: 3}, v => []);
    let vertical = Array.from({length: 3}, v => []);
    let diagonal = Array.from({length: 2}, v => []);
    console.log("horizontal", horizontal, "vertical", vertical, "diagonal", diagonal)
    currentBoard.forEach( (v,i) => {
      vertical[i % 3 === 0 ? 0 : i % 3 === 1 ? 2 : 1].push(v);      
      horizontal[Math.floor(i / 3)].push(v);
      if (i % 4 === 0) diagonal[0].push(v);
      if (i % 2 === 0 && i > 0 && i < 8) diagonal[1].push(v);
      console.log("horizontal", horizontal, "vertical", vertical, "diagonal", diagonal)
    })
    setSets([...vertical, ...horizontal, ...diagonal]);
  }
  useEffect( () => {
    parseBoard(board)    
  },[board])

  const buildBoard = currentBoard => {
    let cells = currentBoard.map( (v,i) => <div className="cell" key={i}>{v}</div>);
    let rows = Array.from({length: 3}, v=> []);
    cells.forEach( (v,i) => rows[Math.floor(i / 3)].push(v))
    return rows.map( (v,i) => <div key={`r${i}`} className="row">{v}</div>)
    }
  

  return (
    <div className="App">
      <header className="App-header">
        {buildBoard(board)}
      </header>
      <div id="board">
    
      </div>
    </div>
  );
}

export default App;
