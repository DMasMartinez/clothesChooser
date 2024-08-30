
const Card = (props) =>{
    return (
        <div key={props.key}>
            <h2>{props.name}</h2>
            <h2>{props.muscleInvolved}</h2>
            <h2>{props.description}</h2>
            <img src={props.image} alt={props.name}/>
        </div>
    )
}

export default Card;