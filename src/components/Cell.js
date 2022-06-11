const Cell = (props) => {
    return (
        <div className="cell" 
        onClick={e => props.selectCell(e,props.index)} 
        key={props.index}>
          <p>{props.board[props.index]}</p>
        </div>
    )
}

export default Cell;