import '../App.css';
import {connect} from 'react-redux';
import {useState, useEffect} from 'react';
import {setMessage, setBoard, setUserTurn} from '../state/action-creators';
import Board from './Board';
import ScoreBoard from './ScoreBoard';
const emptyBoard = Array.from({length: 9});

const mapStateToProps = state => {
  const {message, board, userTurn} = state.ticTacToe;
  return {
    message,
    board,
    userTurn
  }
}

function TicTacToe(props) {
  const {board, setBoard, message, setMessage, userTurn, setUserTurn} = props;
  // const [userTurn, setUserTurn] = useState(Math.random() < .5 ? true : false);
  const [sets, setSets] = useState([]);
  const [winner, setWinner] = useState(null);
  const [score, setScore] = useState({x:0, o:0});

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
   
  },[board, winner])

  const winnerCheck = testBoard => {
    let testSets = parseBoard(testBoard);
    setSets(testSets);
    testSets.forEach( set => {    
    if (set.reduce( (p,v,i,a) => p && v && (i === 0 || v === a[i-1]) ? true : false, true )) {
      setWinner(userTurn ? "❌" : "⭕");
      setScore({
        x: userTurn ? score.x + 1 : score.x,
        o: userTurn ? score.o : score.o + 1
      })      
    } else if (testBoard.filter( v => v).length === 9) setWinner('Nobody');
  })
  }
  const selectCell = (e,index) => {
    if (!board[index] && !winner) {
      let updatedBoard = [...board];
      updatedBoard[index] = userTurn ? "❌" : "⭕";
      setBoard(updatedBoard);
      winnerCheck(updatedBoard);
      if (!winner) setUserTurn(!userTurn);      
      if (!winner) setMessage(`${userTurn ? "⭕" : "❌" }'s Turn to Pick!`)       
    } 
  }

  const newTurn = () => {
    setBoard(emptyBoard);
    setUserTurn(Math.random() < .5 ? true : false);
    setMessage(`${userTurn ? "❌" : "⭕"} Goes First!`);
    setWinner(null);
  }

  return (
    <div className="App"> 
      {winner ? <div className="reset" onClick={newTurn} >New Game</div> : null}
      <h1>{!winner ? message : `${winner} Wins!`}</h1>   
      
      <div id="board">
      <Board selectCell={selectCell} />
      </div>
      <ScoreBoard score={score} />
    </div>
  );
}

export default connect(mapStateToProps, {setMessage, setBoard, setUserTurn})(TicTacToe);
