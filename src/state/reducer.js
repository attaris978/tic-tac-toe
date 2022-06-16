import {combineReducers} from 'redux';
import * as actions from './action-types';

const initTicTacToe = () => {
    let userTurn = Math.random() < .5 ? true : false;
    return{    
    board: Array.from({length: 9}),
    userTurn,
    message: `${userTurn ? "❌" : "⭕"} Goes First!`,
    sets: [],
    winner: null,
    score: {x:0, o:0}
}
}
function ticTacToe (state = initTicTacToe, action) {
  switch(action.type) {
    case actions.SET_MESSAGE:
        return {
            ...state,
            message: action.payload
        };
        default:
            return {...state}


  }
}

export default combineReducers(ticTacToe);