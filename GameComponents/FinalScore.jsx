//making a display for final scoring


import { useGame } from "./GameContext"


export default function FinalScore () {
const { score, restartGame } = useGame()
    return (
    <div>
    <h2 className="gameScore">Good Game! Here is your final score {score} </h2>
    <button  onClick={() => restartGame()}>Restart Game</button>
    </div>
    )
}