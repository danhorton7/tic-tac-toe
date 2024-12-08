import { GameBoardProps, GameBoardType } from './GameBoard.types'
import { INITIAL_BOARD } from '../../constants/board.constants'

const GameBoard = ({ onSelectSquare, turns }: GameBoardProps) => {
  let gameBoard: GameBoardType = structuredClone(INITIAL_BOARD)

  for (const turn of turns) {
    const { square, player } = turn
    const { row, col } = square

    gameBoard[row][col] = player
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIdx) => (
        <li key={rowIdx}>
          <ol>
            {row.map((cellValue, colIdx) => (
              <li key={colIdx}>
                <button
                  disabled={cellValue !== null}
                  onClick={() => onSelectSquare(rowIdx, colIdx)}
                >
                  {cellValue}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  )
}

export default GameBoard
