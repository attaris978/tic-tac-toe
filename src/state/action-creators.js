import * as actions from './action-types';

export function setMessage (message) {
    return {type: actions.SET_MESSAGE, payload: message}
}

export function setBoard (board) {
    return {type: actions.SET_BOARD, payload: board}
}

export function setUserTurn () {
    return {type: actions.SWITCH_TURNS}
}

export function setWinner (winner) {
    return {type: actions.SET_WINNER, payload: winner}
}

export function setScore (score) {
    return {type: actions.SET_SCORE, payload: score}
}

export function resetBoard () {
    return {type: actions.RESET_BOARD}
}