import { useState } from 'react'
import { PlayerProps } from './Player.types'

const Player = ({ playerName, symbol }: PlayerProps) => {
  const [isEditing, setIsEditing] = useState(false)

  const [name, setName] = useState(playerName || 'Player')

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        ) : (
          <span className="player-name">{name}</span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => setIsEditing((editing) => !editing)}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </li>
  )
}

export default Player
