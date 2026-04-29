/*welcome screen splash page to start the game
*/
import { useGame } from "./GameContext"

export default function WelcomeScreen() {
//destructing context children
const { startGame } = useGame()




return (
    <div>
        <div className="welcome">
        <h2>Catch a Diglett!</h2>
        <p>Click the Digletts that pop up to score point. Try to get as many as you can before time runs out!</p>
    </div>
    <button  onClick={() => startGame()}>Start Game</button>
    </div>
)

}

