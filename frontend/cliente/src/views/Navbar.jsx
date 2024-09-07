import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./Login";
import { useEffect } from "react";
import axios from "axios"


const Navbar = (props) => {
    const { isAuthenticated, isLoading, user } = useAuth0();
    const { loginWithRedirect, logout } = useAuth0();

    function formatuser(usuario){
      const newobj = {
        idAuth0:usuario.sub,
          name:usuario.name,
          email:usuario.email,
          image:usuario.picture

      }
      return newobj
    }
    

    useEffect(()=>{
      const saveUser = async () => {
        try {
          await axios.post('http://localhost:3001/user',{
            idAuth0:user.sub,
            name:user.name,
            email:user.email,
            image:user.picture
  
          });
          
        } catch (error) {
          console.error('Error al guardar el usuario:', error);
        }
      };
      if (isAuthenticated==true){
        saveUser()
      }
    },[isAuthenticated]) 

    const uploadUser =async() => {
        await loginWithRedirect()
    }
    return (
        <div>
            {/* <pre>{JSON.stringify(user)}</pre> */}
            <Link to="/">
                <span>Landing</span>
            </Link>
            <Link to="/home">
                <span>Home</span>
            </Link>
            {props.userShow.height===""&&<Link to="/register">
                <span>Register</span>
            </Link>}
            <Link to="/gallery">
                <span>Gallery</span>
            </Link>
            {isAuthenticated==true&&<Link to="/profile">
                <span>Profile</span>
            </Link>}
            {isAuthenticated==false?<span onClick={()=>uploadUser()}>Login</span>:<span
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </span>}
        </div>
    )
}

export default Navbar;