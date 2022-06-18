
const ScoreBoard = props => {
    const {score} = props;
    return (        
        <div><p>{`❌: ${score.x}|⭕: ${score.o}`}</p></div>
    )
}

export default ScoreBoard;