import React from 'react';

const ScoreBoard = (props : {score : {x: number, o: number} } ) => {
    const {score} = props;
    return (        
        <div><p>{`❌: ${score.x}|⭕: ${score.o}`}</p></div>
    )
}

export default ScoreBoard;