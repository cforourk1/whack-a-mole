/* this function will display an empty hole unless diglett is active - the props come from GameBoard and pulls in context
*/
export default function Hole({ currentDiglett, hasDiglett, whackDiglett }) {
const isActive = hasDiglett


return (
    <li className="hole">
        {isActive ? (
            <div>
                <img src={currentDiglett.image} />
                <button onClick={() => whackDiglett()}>Catch Diglett!</button>
            </div>
        ) : null }
    </li>
)
}