import { useState } from 'react'
import { GameBoardType } from './GameBoard.types'

const initialBoard: GameBoardType = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState<GameBoardType>(initialBoard)

  const handleSelectSquare = (rowIdx: number, colIdx: number) => {
    setGameBoard((prevGameBoard) => {
      const newBoardState: GameBoardType = [
        [...prevGameBoard[0]],
        [...prevGameBoard[1]],
        [...prevGameBoard[2]],
      ]
      newBoardState[rowIdx][colIdx] = 'X'
      return newBoardState
    })
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIdx) => (
        <li key={rowIdx}>
          <ol>
            {row.map((cellValue, colIdx) => (
              <li key={colIdx}>
                <button onClick={() => handleSelectSquare(rowIdx, colIdx)}>
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
