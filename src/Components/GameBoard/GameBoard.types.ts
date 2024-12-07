type GameSymbol = 'X' | 'O' | null
export type Player = GameSymbol
export type CellValue = GameSymbol

export type BoardRow = [CellValue, CellValue, CellValue]
export type GameBoardType = [BoardRow, BoardRow, BoardRow]

export const initialGameBoard: GameBoardType = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
] as GameBoardType

export interface GameBoardProps {
  onSelectSquare: (rowIdx: number, colIdx: number) => void
  turns: Turn[]
}
export interface Square {
  row: number
  col: number
}

export interface Turn {
  square: Square
  player: Player
}
