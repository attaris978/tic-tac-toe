import {combineReducers} from 'redux';
import {TicTacToeState, ActionStrings, Action} from '../types';
// import * as actions from './action-types';

const initTicTacToe = (): TicTacToeState => {
  let userTurn = Math.random() < .5 ? true : false;
  let message = `${userTurn ? "❌" : "⭕"} Goes First!`;
  let board = Array.from({length: 9})
  return{    
    board,
    userTurn,
    message,
    sets: [],
    winner: null,
    score: {x:0, o:0}
  }
}
function ticTacToe (state = initTicTacToe(), action: Action) {
  switch(action.type) {
    case ActionStrings.SET_MESSAGE:
      return {
        ...state,
        message: action.payload
      };
    case ActionStrings.SET_BOARD:
      return {
        ...state,
          board: action.payload
      };
    case ActionStrings.SWITCH_TURNS:
      return {
        ...state,
        userTurn: !state.userTurn
      };
    case ActionStrings.SET_WINNER:
      return {
        ...state,
        winner: action.payload
      };
    case ActionStrings.SET_SCORE:
      return {
        ...state,
        score: action.payload
      };
    case ActionStrings.RESET_BOARD:
      return {
        ...state,
        board: Array.from({length: 9})
      };


    default:
      return {...state}
  }
}

export default combineReducers({ticTacToe});