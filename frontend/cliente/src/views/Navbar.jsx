import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./Login";
import { useEffect } from "react";
import axios from "axios"


const Navbar = (props) => {
    const { isAuthenticated, isLoading, user } = useAuth0();
    const { loginWithRedirect, logout } = useAuth0();
    
    
    
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

    const uploadUser =async() => {
        await loginWithRedirect()
        if (isAuthenticated){
          saveUser()
        }
        // await subirfunction()
        // if (isAuthenticated){
        //     await subirfunction()
        // }
    }

    // useEffect(() => {
        
    //     if (isAuthenticated && user) {
    //       const saveUser = async () => {
    //         try {
    //           await axios.post('http://localhost:3001/user',{
    //             idAuth0:user.sub,
    //             name:user.name,
    //             email:user.email,
    //             image:user.picture

    //           });
              
    //         } catch (error) {
    //           console.error('Error al guardar el usuario:', error);
    //         }
    //       };
    
    //       saveUser();
    //     }
    // }, [isAuthenticated, user]);
    
    //   if (isLoading) {
    //     return <div>Loading...</div>;
    //   }
    return (
        <div>
            {/* <pre>{JSON.stringify(user)}</pre> */}
            <Link to="/">
                <span>Landing</span>
            </Link>
            <Link to="/home">
                <span>Home</span>
            </Link>
            {user!==null&&<Link to="/register">
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