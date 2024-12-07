export type CellValue = 'X' | 'O' | null

export type BoardRow = [CellValue, CellValue, CellValue]
export type GameBoardType = [BoardRow, BoardRow, BoardRow]

export const initialGameBoard: GameBoardType = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
] as GameBoardType
