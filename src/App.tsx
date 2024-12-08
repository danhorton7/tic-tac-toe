import { useState } from 'react'
import GameBoard from './Components/GameBoard/GameBoard'
import Player from './Components/Player/Player'
import Log from './Components/Log/Log'
import { Turn } from './Components/GameBoard/GameBoard.types'
import { WINNING_COMBINATIONS } from './constants/game.constants'
import GameOver from './Components/GameOver/GameOver'

const App = () => {
  const [turns, setTurns] = useState<Turn[]>([])
  const currentPlayer = turns.length % 2 === 0 ? 'X' : 'O'

  const gameBoard = Array(3)
    .fill(null)
    .map(() => Array(3).fill(null))

  // Apply turns to the fresh board
  turns.forEach((turn) => {
    const { row, col } = turn.square
    gameBoard[row][col] = turn.player
  })

  const winner = WINNING_COMBINATIONS.some(([a, b, c]) => {
    const first = gameBoard[a.row][a.col]
    return (
      first &&
      first === gameBoard[b.row][b.col] &&
      first === gameBoard[c.row][c.col]
    )
  })

  const isDraw = !winner && turns.length === 9

  const handleSquareSelect = (row: number, col: number) => {
    setTurns((prevTurns) => [
      ...prevTurns,
      { square: { row, col }, player: currentPlayer },
    ])
  }

  const startNewGame = () => {
    setTurns([])
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            playerName="Player 1"
            symbol="X"
            isActive={currentPlayer === 'X'}
          />
          <Player
            playerName="Player 2"
            symbol="O"
            isActive={currentPlayer === 'O'}
          />
        </ol>
        {(winner || isDraw) && (
          <GameOver
            player={winner ? (currentPlayer === 'X' ? 'O' : 'X') : undefined}
            isDraw={isDraw}
            onRematch={startNewGame}
          />
        )}
        <GameBoard onSelectSquare={handleSquareSelect} turns={turns} />
      </div>
      <Log turns={turns} />
    </main>
  )
}

export default App
