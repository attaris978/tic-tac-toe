import './App.css';
import {useState} from 'react'

const emptyBoard = Array.from({length: 3}, v => Array.from({length: 3}))

function App() {

  const [board, setBoard] = useState(emptyBoard)
  const [userTurn, setUserTurn] = useState(Math.random() < .5 ? true : false);
  const [sets, setSets] = useState([])

  const parseBoard = currentBoard => {
    const horizontal = Array.from({length: 3}, v => Array.from({length: 3}));
    const vertical = Array.from({length: 3}, v => Array.from({length: 3}));
    const diagonal = Array.from({length: 2}, v => Array.from({length: 3}));
    currentBoard.forEach( (v,i) => {
      if (i % 3 === 0) vertical[i].push(v);
      horizontal[Math.floor(i / 3)].push(v);
      if (i % 4 === 0) diagonal[0].push(v);
      if (i % 2 === 0 && i > 0 && i < 8) diagonal[1].push(v);
    })
    return [...vertical, ...horizontal, ...diagonal]
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>{parseBoard(board).toString()}</p>
      </header>
    </div>
  );
}

export default App;
