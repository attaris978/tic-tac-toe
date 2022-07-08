import React from 'react';
import {BoardState} from '../../types';
import Cell from './Cell.jsx'
import {connect} from 'react-redux';

const mapStateToProps = state => {
  const {board} = state.ticTacToe;
  return {
    board
  }
}

const Board = props => {
  const {board, selectCell} = props;
  let cells = board.map( (v,i) => <Cell index={i} selectCell={selectCell} board = {board} key={i}>{v}</Cell>);
  let rows = Array.from({length: 3}, v=> []);
  cells.forEach( (v,i) => rows[Math.floor(i / 3)].push(v))
  return rows.map( (v,i) => <div key={`r${i}`} className="row">{v}</div>)
}

export default connect(mapStateToProps, {})(Board);