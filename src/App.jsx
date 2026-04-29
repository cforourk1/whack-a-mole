import { useGame } from "../GameComponents/GameContext";
import  WelcomeScreen from "../GameComponents/WelcomeScreen";
import GameBoard from "../GameComponents/GameBoard";
import FinalScore from "../GameComponents/FinalScore";





export default function App() {
//this is DESTRUCTURE 
  const { gamePlay, gameOver } = useGame()
  return (
    <div>
      {gamePlay ? <GameBoard /> : gameOver ? <FinalScore /> : <WelcomeScreen /> }
    </div>
  )
}
