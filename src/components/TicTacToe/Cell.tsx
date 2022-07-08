import React from 'react';
import {CellState} from '../../types';

const Cell = (props: CellState) => {
    const {index, board, selectCell} = props;
    const classes = 'cell '.concat(
        index % 3 === 0 ? 'left ' : '',
        index % 3 === 2 ? 'right ' : '', 
        index < 3 ? 'top ' : '', 
        index > 5 ? 'bottom' : '')              
 
    return (
        <div className={classes} 
        onClick={e => selectCell(null,index)} 
        key={index}>
          <p>{board[index]}</p>
        </div>
    )
}

export default Cell;