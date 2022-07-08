import {ActionStrings as actions} from '../types';
import {Action, Winner} from '../types';

export function setMessage (message: string) : Action {
    return {type: actions.SET_MESSAGE, payload: message}
}

export function setBoard (board: string[]) : Action {
    return {type: actions.SET_BOARD, payload: board}
}

export function setUserTurn () : Action{
    return {type: actions.SWITCH_TURNS}
}

export function setWinner (winner:  Winner) : Action {
    return {type: actions.SET_WINNER, payload: winner}
}

export function setScore (score: {x: number, o: number} ) : Action {
    return {type: actions.SET_SCORE, payload: score}
}

export function resetBoard () : Action {
    return {type: actions.RESET_BOARD}
}