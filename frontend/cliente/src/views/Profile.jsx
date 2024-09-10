import { useAuth0, User } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Favcard from "../components/Favcard";

const Profile = (props) => {
    const {user, isAuthenticated} = useAuth0()
    // const [newuser,setNewuser] = useState({})
    const location = useLocation()

    useEffect(()=>{
        async function fetchdata(){
            if (isAuthenticated){
                await fetch(`http://localhost:3001/user/userByAuth0/?idAuth0=${user.sub}`)
                .then(res => res.json())
                .then(data=>props.setUserShow(data))
                
            }
            
        }
        fetchdata()
        
        
    },[])

    // useEffect(async()=>{
    //     await fetch(`http://localhost:3001/user/userByAuth0/?idAuth0=${user.sub}`)
    //             .then(res => res.json())
    //             .then(data=>setNewuser(data))
    // },[])
    console.log(props.userShow)
    return (
        <div>
            {/* <pre>{JSON.stringify(newuser)}</pre> */}
            <h2>{props.userShow.name}</h2>
            <h2>{props.userShow.email}</h2>
            {props.userShow.height&&<h2>{props.userShow.height}cm</h2>}
            {props.userShow.weight&&<h2>{props.userShow.weight}kg</h2>}
            <img src={props.userShow.image}/>
            {props.userShow.body_type!==null&&<h2>{props.userShow.body_type}</h2>}
            {props.userShow.objetives!==null&&<h2>{props.userShow.objetives}</h2>}
            {props.userShow.height===null&&<Link to="/register"><span>advance char</span></Link>}
            {props.userShow.Favorites.map((favorite,indice)=>{
                return(
                <div key={indice}>
                    <Favcard
                        fav_name={favorite.fav_name}
                        fav_image={favorite.fav_image}
                    />
                </div>)
            })}
        </div>
    )
}

export default Profile;