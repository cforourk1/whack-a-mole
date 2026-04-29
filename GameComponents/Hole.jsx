/* this function will display an empty hole unless diglett is active - the props come from GameBoard and pulls in context
*/
export default function Hole({ currentDiglett, hasDiglett, whackDiglett }) {
const isActive = hasDiglett


return (
    <li className="hole" onClick={isActive ? () => whackDiglett() : null}>
        {isActive ? (
            <div>
                <img src={currentDiglett.image} />
            </div>
        ) : null }
    </li>
)
}