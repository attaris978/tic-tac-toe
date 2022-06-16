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