import {combineReducers} from 'redux';
import {TicTacToeState} from '../types';
import * as actions from './action-types';

const initTicTacToe = (): TicTacToeState => {
  let userTurn = Math.random() < .5 ? true : false;
  let message: string = `${userTurn ? "❌" : "⭕"} Goes First!`;
  let board: string[] = Array.from({length: 9})
  return{    
    board,
    userTurn,
    message,
    sets: [],
    winner: null,
    score: {x:0, o:0}
  }
}
function ticTacToe (state = initTicTacToe(), action) {
  switch(action.type) {
    case actions.SET_MESSAGE:
      return {
        ...state,
        message: action.payload
      };
    case actions.SET_BOARD:
      return {
        ...state,
          board: action.payload
      };
    case actions.SWITCH_TURNS:
      return {
        ...state,
        userTurn: !state.userTurn
      };
    case actions.SET_WINNER:
      return {
        ...state,
        winner: action.payload
      };
    case actions.SET_SCORE:
      return {
        ...state,
        score: action.payload
      };
    case actions.RESET_BOARD:
      return {
        ...state,
        board: Array.from({length: 9})
      };


    default:
      return {...state}
  }
}

export default combineReducers({ticTacToe});