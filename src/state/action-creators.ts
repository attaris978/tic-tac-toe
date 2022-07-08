import {ActionStrings as actions} from '../types';

export function setMessage (message: string) {
    return {type: actions.SET_MESSAGE, payload: message}
}

export function setBoard (board: string[]) {
    return {type: actions.SET_BOARD, payload: board}
}

export function setUserTurn () {
    return {type: actions.SWITCH_TURNS}
}

export function setWinner (winner: string) {
    return {type: actions.SET_WINNER, payload: winner}
}

export function setScore (score: {x: number, o: number} ) {
    return {type: actions.SET_SCORE, payload: score}
}

export function resetBoard () {
    return {type: actions.RESET_BOARD}
}