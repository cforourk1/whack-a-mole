import { useGame } from "../GameComponents/GameContext";
import  WelcomeScreen from "../GameComponents/WelcomeScreen";
import GameBoard from "../GameComponents/GameBoard";





export default function App() {
  const { gamePlay } = useGame()
  return (
    <div>
      {gamePlay ? <GameBoard /> : <WelcomeScreen />}
    </div>
  )
}
