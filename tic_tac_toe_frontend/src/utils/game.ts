export type Player = 'X' | 'O';
export type Cell = Player | null;
export type Board = Cell[];

export type GameStatus =
  | { type: 'in_progress'; next: Player }
  | { type: 'win'; winner: Player; line: number[] }
  | { type: 'draw' };

export const initialBoard = (): Board => Array<Cell>(9).fill(null);

export const winningLines: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // cols
  [0, 4, 8],
  [2, 4, 6], // diagonals
];

export function getWinner(board: Board): { winner: Player; line: number[] } | null {
  for (const line of winningLines) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a] as Player, line };
    }
  }
  return null;
}

export function getAvailableMoves(board: Board): number[] {
  const moves: number[] = [];
  board.forEach((cell, idx) => {
    if (cell === null) moves.push(idx);
  });
  return moves;
}

export function evaluateGame(board: Board, next: Player): GameStatus {
  const winner = getWinner(board);
  if (winner) return { type: 'win', winner: winner.winner, line: winner.line };
  if (getAvailableMoves(board).length === 0) return { type: 'draw' };
  return { type: 'in_progress', next };
}
