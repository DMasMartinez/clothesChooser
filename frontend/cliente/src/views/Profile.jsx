import { useAuth0, User } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

const Profile = (props) => {
    const {user, isAuthenticated} = useAuth0()
    const [newuser,setNewuser] = useState({})

    useEffect(()=>{
        async function fetchdata(){
            if (isAuthenticated){
                await fetch(`http://localhost:3001/user/userByAuth0/?idAuth0=${user.sub}`)
                .then(res => res.json())
                .then(data=>setNewuser(data))
            }
            
        }
        fetchdata()
        
    },[])

    // useEffect(async()=>{
    //     await fetch(`http://localhost:3001/user/userByAuth0/?idAuth0=${user.sub}`)
    //             .then(res => res.json())
    //             .then(data=>setNewuser(data))
    // },[])
    return (
        <div>
            {/* <pre>{JSON.stringify(newuser)}</pre> */}
            <h2>{newuser.name}</h2>
            <h2>{newuser.email}</h2>
            {newuser.height&&<h2>{newuser.height}</h2>}
            {newuser.weight&&<h2>{newuser.weight}</h2>}
            <img src={newuser.image}/>
        </div>
    )
}

export default Profile;