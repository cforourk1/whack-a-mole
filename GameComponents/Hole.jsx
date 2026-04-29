/* this function will display an empty hole unless diglett is active - the props come from GameBoard and pulls in context 
*/
export default function Hole({ holeIndex, digHole, currentDiglett, whackDiglett }) {
const isActive = holeIndex === digHole


return (
    <div className="hole">
        {isActive ? (
            <div>
                <img src={currentDiglett.image} />
                <button onClick={() => whackDiglett()}>Catch Diglett!</button>
            </div>
        ) : null }
    </div>
)
}