// import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
// import { desmontarEjercicios } from "../reduxx/exerciseSlice";
import Cards from "../components/Cards";
import Card from "../components/Card";

const Home =(props)=>{
    // const dispatch = useDispatch()
    // const ejercicios = useSelector(state=>state.allexercises)
    const [array,setArray] = useState([])
    const [qt,setQt] = useState(6)
    const [page,setPage] = useState(1)
    const firstval = (qt*page-qt)
    const lastval = (qt*page)
    function nextpage(){
        if ((array.lenght/qt)<page){
            setPage(page+1)
        }else{
            setPage(page-1)
        }
    }
    function previouspage(){
        if (page<1){
            setPage(page+1)
        }else{
            setPage(page-1)
        }
    }
    async function showExerc (){
        const newval = await props.ExercisesHome()
        setArray([newval])
    }
    useEffect(()=>{

        showExerc()
        // try{
        // async function ExercisesHome(){
        //     const indices =Array.from({ length: 30 }, (_, index) => index+1)
        //     const ejer = indices.map(async(indice) =>{
        //           const res = await fetch(`http://localhost:5002/exercises/${indice}`)
        //           const data = await res.json()
        //           return data
        //         })
        //     const allexer = await Promise.all(ejer)
        //     setArray([...array,allexer])
        
        //   }
        //   ExercisesHome()
        // }catch(error){
        //     console.log(error)
        // }
          
    },[])
    console.log(array)
    // const show = array[0][2]
    return(
        <div>
            {/* <Cards array = {array} setPage = {setPage} qt = {qt} page = {page} firstval = {firstval} lastval = {lastval}/> */}
            {/* <img src={show.image}/> */}
            
            {array.length>0&&array[0].slice(firstval,lastval).map((exercise,index)=>{
                return (
                    <div key={index}>
                        <h2>{exercise.name}</h2>
                        <h2>{exercise.muscleInvolved}</h2>
                        <h2>{exercise.description}</h2>
                    </div>
                )
            })}
            <button onClick={()=>previouspage()}>
                previous
            </button>
            <button onClick={()=>nextpage()}>
                next
            </button>
        
        </div>
    )
}

export default Home;