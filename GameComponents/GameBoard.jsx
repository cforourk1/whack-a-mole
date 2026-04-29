/* This piece of the function has the restart button, sorts out where a diglett is, maps and creates the holes.
*/

import Hole from "./Hole"
import { useGame } from "./GameContext"

export default function GameBoard () {
  const {score, restartGame, digHole, currentDiglett, whackDiglett} = useGame()
  const field = Array(9).fill(false)
  field[digHole] = true

return (

    <div>
        <div className="score">
        <h2>Score: {score} points</h2>
        </div>
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
    <button  onClick={() => restartGame()}>Restart Game</button>
    </div>
)
}

