export interface TicTacToeState {
    board: string[] | unknown[],
    userTurn: boolean,
    message: string,
    sets: string[][],
    winner: string | null,
    score: {x: number, o: number}
}
