// import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
// import { desmontarEjercicios } from "../reduxx/exerciseSlice";
import Cards from "../components/Cards";
import Card from "../components/Card";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const Home =(props)=>{
    // const dispatch = useDispatch()
    // const ejercicios = useSelector(state=>state.allexercises)
    const {user, isAuthenticated} = useAuth0()
    const [array,setArray] = useState([])
    const [qt,setQt] = useState(6)
    const [page,setPage] = useState(1)
    // const [isfav,setIsfav] = useState(false)
    // const firstval = (qt*page-qt)
    // const lastval = (qt*page)
    // async function uploadfav(exercise){
    //     const response = await fetch(`http://localhost:3001/favorite?id=${props.userShow.id}`,{
    //         method:"POST",
    //         headers:{
    //             "Content-Type":"application/json",
    //         },
    //         body: JSON.stringify(exercise)
    //     })
    // }
    // async function deletefav(exercise){
    //     const response = await fetch("http://localhost:3001/favorite",{
    //         method:"PUT",
    //         headers:{
    //             "Content-Type":"application/json",
    //         },
    //         body: JSON.stringify(exercise)
    //     })
    // }
    // function handlerFavorite(exercise){
    //     if (isfav==false){
    //         setIsfav(!isfav)
    //         uploadfav(exercise)
    //     }else{
    //         setIsfav(!isfav)
    //     }
    // }
    // function nextpage(){
    //     if ((array.lenght/qt)<page){
    //         setPage(page+1)
    //     }else{
    //         setPage(page-1)
    //     }
    // }
    // function previouspage(){
    //     if (page<1){
    //         setPage(page+1)
    //     }else{
    //         setPage(page-1)
    //     }
    // }
    async function showExerc (){
        const newval = await props.ExercisesHome()
        setArray([newval])
    }
    useEffect(()=>{

        showExerc()
          
    },[])
    async function usertoshow(){
        await axios.get(`http://localhost:3001/user/userbyAuth0?idAuth0=${user.sub}`)
            .then(response=>{
                const data = response.data
                props.setUserShow(data)
            })
    }
    useEffect(()=>{
        if (isAuthenticated===true){
            usertoshow()
        }
    },[isAuthenticated])
    console.log(props.userShow)
    
    return(
        <div>
            <Cards array = {array} setPage = {setPage} qt = {qt} page = {page} userShow = {props.userShow} setUserShow = {props.setUserShow}/>
            {/* <img src={show.image}/> */}
            
            {/* {array.length>0&&array[0].slice(firstval,lastval).map((exercise,index)=>{
                return (
                    <div key={index}>
                        {isfav===false?<button onClick={()=>handlerFavorite(exercise)}>right for you</button>:<button onClick={()=>handlerFavorite(exercise)}>not choose</button>}
                        <h2>{exercise.name}</h2>
                        <h2>{exercise.muscleInvolved}</h2>
                        <h2>{exercise.description}</h2>
                        <img src={exercise.image} alt={exercise.name}/>
                    </div>
                )
            })}
            <button onClick={()=>previouspage()}>
                previous
            </button>
            <button onClick={()=>nextpage()}>
                next
            </button> */}
        
        </div>
    )
}

export default Home;

// continuar anadiendo el componente card a lo mejor asi funcione tu boton favoritos, sin embargo tambien integrar el registro extra mas bien comprobar