import { useState } from "react"
const Card = (props) =>{
    const [isfav,setIsfav] = useState(false)

    async function uploadfav(){
        const response = await fetch(`http://localhost:3001/favorite?id=${props.userShow.id}`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify({"fav_name":props.exercise.name,"fav_description":props.exercise.description,"fav_image":props.exercise.image,"UserId":props.userShow.id})
        })
        console.log(response)
    }
    async function deletefav(){
        const response = await fetch("http://localhost:3001/favorite",{
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(props.exercise)
        })
    }
    function handlerFavorite(){
        if (isfav==false){
            setIsfav(!isfav)
            uploadfav()
        }else{
            setIsfav(!isfav)
            deletefav()
        }
    }
    console.log(props.userShow)

    return (
        <div>
            {isfav===false?<button onClick={()=>handlerFavorite()}>right for you</button>:<button onClick={()=>handlerFavorite()}>not choose</button>}
            <h2>{props.name}</h2>
            <h2>{props.muscleInvolved}</h2>
            <h2>{props.description}</h2>
            <img src={props.image} alt={props.name}/>
        </div>
    )
}

export default Card;