import Confetti from 'react-confetti'
interface GameOverProps {
  player?: string
  isDraw?: boolean
  onRematch: () => void // Function that returns nothing
}
const GameOver = ({ player, isDraw, onRematch }: GameOverProps) => {
  return (
    <div id="game-over">
      <Confetti
        gravity={0.3}
        origin={{ x: 0.5, y: 1 }} // Start from bottom center
      />
      <h2>Game Over!</h2>
      {isDraw ? <p>It's a draw!</p> : <p>Player {player} won!</p>}
      <p>
        <button onClick={onRematch}>New game</button>
      </p>
    </div>
  )
}

export default GameOver
