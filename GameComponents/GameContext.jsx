import DIGLETTS from "../src/data"
import { createContext, useContext, useState, useEffect } from "react"
const GameContext = createContext()



export default function GameProvider ({children}) {

//adding timer
const [timer, setTimer] = useState(30)

// declaring useState Variables
//start score at 0
const [score, setScore] = useState(0)

//set playing game to false to start
const [gamePlay, setgamePlay] = useState(false)

//position where a Diglett currently is
const [digHole, setdigHole] = useState(0)

// which Digelett is showing
const [currentDiglett, setcurrentDiglett] = useState()

/*this will start the game - set gameplay to true - pick a random spot where diglett will start and pick a random diglett to appear
*/
function startGame () {
    setgamePlay(true)
    setdigHole(Math.floor(Math.random() * 9))
    setcurrentDiglett(DIGLETTS[Math.floor(Math.random() * DIGLETTS.length)])
}
/* function to reset the game to start.
*/
function restartGame() {
    setgamePlay(false)
    setdigHole(0)
    setcurrentDiglett()
}
/* function to keep score and pop up more random digletts
*/
function whackDiglett() {
    setScore(score + currentDiglett.points)
    setdigHole(Math.floor(Math.random() * 9))
    setcurrentDiglett(DIGLETTS[Math.floor(Math.random() * DIGLETTS.length)])

}

//timer function

useEffect(() => {
setgamePlay()
timer()
setTimer()
setgamePlay()
)}

//value for sharing among components

const value = { score, gamePlay, digHole, currentDiglett, startGame, restartGame, whackDiglett }

return (
<GameContext.Provider value={value}>{children}</GameContext.Provider>


)

}

export function useGame () {
    const context = useContext(GameContext)
    if (!context) throw Error("useGame must be within GameProvider")
    return context
}