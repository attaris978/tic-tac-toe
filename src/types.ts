export interface TicTacToeState {
    board: string[] | unknown[],
    userTurn: boolean,
    message: string,
    sets: string[][],
    winner: string | null,
    score: {x: number, o: number}
}

export interface CellState {
    index: number,
    board: string[],
    selectCell: (e: any, index: number) => void
}

export enum ActionStrings {
    SET_MESSAGE = 'SET_MESSAGE',
    SET_BOARD = 'SET_BOARD',
    SWITCH_TURNS = 'SWITCH_TURNS',
    SET_WINNER = 'SET_WINNER',
    SET_SCORE = 'SET_SCORE',
    RESET_BOARD = 'RESET_BOARD'
}

export type Action = 
|  { type: ActionStrings.SET_MESSAGE, payload: string}
|  { type: ActionStrings.SET_BOARD, payload: string[]}
|  { type: ActionStrings.SWITCH_TURNS}
|  { type: ActionStrings.SET_WINNER, payload: "❌" | "⭕" | null }
|  { type: ActionStrings.SET_SCORE, payload: {x: number, o: number} }
|  { type: ActionStrings.RESET_BOARD}
