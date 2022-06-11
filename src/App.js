import './App.css';
import {useState, useEffect} from 'react'

const emptyBoard = Array.from({length: 3}, v => Array.from({length: 3}))

function App() {

  const [board, setBoard] = useState(Array.from({length: 9}, (v,i) => i))
  const [userTurn, setUserTurn] = useState(Math.random() < .5 ? true : false);
  const [sets, setSets] = useState([])

  const parseBoard = currentBoard => {
    const horizontal = Array.from({length: 3}, v => Array.from({length: 3}));
    const vertical = Array.from({length: 3}, v => Array.from({length: 3}));
    const diagonal = Array.from({length: 2}, v => Array.from({length: 3}));
    currentBoard.forEach( (v,i) => {
      if (i % 3 === 0) vertical[Math.floor(i % 3)].push(v);
      horizontal[Math.floor(i / 3)].push(v);
      if (i % 4 === 0) diagonal[0].push(v);
      if (i % 2 === 0 && i > 0 && i < 8) diagonal[1].push(v);
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
