export type Winner = "❌" | "⭕" | "Nobody" | null;
export interface TicTacToeState {
    board: string[],
    userTurn: boolean,
    message: string,
    // sets: string[][],
    winner: Winner,
    score: {x: number, o: number}
}

export interface CellState {
    index: number,
    board: string[],
    children: any,
    selectCell: (e: MouseEvent | null, index: number) => void
}

export interface BoardState {
    board: string[],
    selectCell: (e: MouseEvent | null, index: number) => void
}

export interface StateStore {
    ticTacToe: TicTacToeState
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
|  { type: ActionStrings.SET_WINNER, payload: Winner }
|  { type: ActionStrings.SET_SCORE, payload: {x: number, o: number} }
|  { type: ActionStrings.RESET_BOARD}

export type TicTacToeActionFunctions = {
    setMessage: (message: string) => void,
    setBoard: (board: string[]) => void,
    setUserTurn: (userTurn: boolean) => void, 
    setWinner: (winner: Winner) => void, 
    setScore: (score: {x: number, o: number}) => void,
    resetBoard: () => void
}