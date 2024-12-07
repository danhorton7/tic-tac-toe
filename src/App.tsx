import GameBoard from './Components/GameBoard/GameBoard'
import Player from './Components/Player/Player'

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player playerName="Player 1" symbol="X" />
          <Player playerName="Player 2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
    </main>
  )
}

export default App
