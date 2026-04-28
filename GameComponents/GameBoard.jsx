/* This piece of the function has the restart button, sorts out where a diglett is, maps and creates the holes. 
*/

import Hole from "./Hole"
import { useGame } from "./GameContext"

export default function GameBoard () {
  const {score, restartGame, digHole, currentDiglett, whackDiglett} = useGame()

return (
    <div>
        <div className="score">
        <h2>Score: ${score}</h2>
        {Array.from({ length: 9 }).map((_, holeIndex) => (
        <Hole
        key={holeIndex}
        holeIndex={holeIndex}
        digHole={digHole}
        currentDiglett={currentDiglett}
        whackDiglett={whackDiglett}
        />
        ))}
    </div>
    <button  onClick={() => restartGame()}>Restart Game</button>
    </div>
)
}

