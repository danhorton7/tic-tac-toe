import { LogProps } from './Log.types'

const Log = ({ turns }: LogProps) => {
  return (
    <ol id="log">
      {turns.map((turn, turnIdx) => (
        <li key={turnIdx}>
          <b>{turn.player}</b> selected square ({turn.square.row + 1},{' '}
          {turn.square.col + 1}){' '}
        </li>
      ))}
    </ol>
  )
}

export default Log
