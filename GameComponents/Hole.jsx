




export default function Hole({ holeIndex, digHole, currentDiglett, whackDiglett }) {
const isActive = holeIndex === digHole


return (
    <div>
        {isActive ? (
        <div>
            <img src={currentDiglett.image} />
        : null}
    <button  onClick={() => whackDiglett()}>Whack Diglett!</button>
    </div>
)

}