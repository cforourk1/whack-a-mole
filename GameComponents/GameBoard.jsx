/* This piece of the function has the restart button, sorts out where a diglett is, maps and creates the holes.
*/

import Hole from "./Hole"
import { useGame } from "./GameContext"

export default function GameBoard () {
  const {score, restartGame, digHole, currentDiglett, whackDiglett, timer} = useGame()
  const field = Array(9).fill(false)
  field[digHole] = true

return (

    <div>
        <div className="score">
        <h2>Score: {score} points</h2>
        <h2>Timer: {timer}</h2>
        </div>
        <button className="restart"  onClick={() => restartGame()}>Restart Game</button>
        <ul className="field">
        {field.map((hasDiglett, holeIndex) => (
        <Hole
        key={holeIndex}
        holeIndex={holeIndex}
        hasDiglett={hasDiglett}
        digHole={digHole}
        currentDiglett={currentDiglett}
        whackDiglett={whackDiglett}

        />
        ))}
     </ul>
    </div>
)
}

