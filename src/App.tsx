import { useState } from 'react'
import GameBoard from './Components/GameBoard/GameBoard'
import Player from './Components/Player/Player'
import Log from './Components/Log/Log'
import { Turn } from './Components/GameBoard/GameBoard.types'

const App = () => {
  const [turns, setTurns] = useState<Turn[]>([])
  const currentPlayer = turns.length % 2 === 0 ? 'X' : 'O'

  const handleSquareSelect = (row: number, col: number) => {
    setTurns((prevTurns) => [
      ...prevTurns,
      { square: { row, col }, player: currentPlayer },
    ])
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
        <GameBoard onSelectSquare={handleSquareSelect} turns={turns} />
      </div>
      <Log turns={turns} />
    </main>
  )
}

export default App
