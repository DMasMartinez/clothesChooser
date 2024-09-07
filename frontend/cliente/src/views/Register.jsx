import { useEffect, useState } from "react";
import { useAsyncError } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Validation from "../utils/Validation";

const Register = () =>{
    const [weigh,setWeigh] = useState([])
    const [heigh,setHeigh] = useState([])
    const [checkedItems,setCheckedItems]=useState({})
    const bodies = ["Ectomorfo","Mesomorfo","Endomorfo"]
    const objetivos = ["get thinner", "get bulking", "define"]
    const {user} = useAuth0()
    // arrayheight = [150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,199,200,201,202,203,204,205,206,207,208,209,210]
    function getweightheight(){
        const weighshow = []
        const heighshow = []
        for (var i=0; i<70;i++){
            weighshow.push(50+i)
            heighshow.push(140+i)
        }
        setWeigh([...weighshow])
        setHeigh([...heighshow])
    }
    const [users,setUsers]=useState({
        height:"",
        weight:"",
        typeofbody:"",
        objective:""
    })
    const [error,setError] = useState({
        height:"",
        weight:"",
        typeofbody:"",
        objective:""
    })
    useEffect(()=>{
        getweightheight()
    },[])
    function changeinput(event){
        if (event.target.name==="height"){
            setUsers({...users,height:event.target.value})
            setError(Validation({...users,height:event.target.value}))
        }
        if (event.target.name==="weight"){
            setUsers({...users,weight:event.target.value})
            setError(Validation({...users,weight:event.target.value}))
        }
        if (event.target.name==="typeofbody"){
            setUsers({...users,typeofbody:event.target.value})
            setError(Validation({...users,typeofbody:event.target.value}))
        }
        if (event.target.name==="objective"){
            setUsers({...users,objective:event.target.value})
            setError(Validation({...users,objective:event.target.value}))
        }
    }
    function checkedhandler(event){
        setCheckedItems({
            ...checkedItems,
            [event.target.name]:event.target.checked,
        })
    }

    async function handlerSubmit(e){
        e.preventDefault()
        const response = fetch(`http://localhost:3001/${user.sub}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(users)
        })
    }
    console.log(bodies)
    return (
        <div>
            <h2>Advance Settings</h2>
            <form onSubmit={handlerSubmit}>
                <label htmlFor="height">
                    Height(cm):
                </label>
                <select name="height" value={user.height} onChange={changeinput}>
                {heigh.length>0&&heigh.map(((altura,indice)=>{
                    return(
                        
                        <option value={altura} key={indice}>
                            {altura}
                        </option>
                        
                    )
                }))}
                </select>
                {error.height!==""&&<span>{error.height}</span>}
                <label htmlFor="weight">
                    Weight(kg):
                </label>
                <select name="weight" value={user.weight} onChange={changeinput}>
                {weigh.length>0&&weigh.map(((peso,indice)=>{
                    return(
                        <option value={peso} key={indice}>
                            {peso}
                        </option>
                    )
                }))}
                </select>
                {error.weight!==""&&<span>{error.weight}</span>}
             
                <div>
                    <label>Type of Body:</label>
                    {bodies.map((bodie,indice)=>{
                        return(
                            <div key={indice}>
                                <input
                                    type="checkbox"
                                    name={bodie}
                                    checked={checkedItems[bodie]||false}
                                    onChange={checkedhandler}
                                />
                                <label>{bodie}</label>
                            </div>
                        )
                    })}
                </div>
                {error.typeofbody!==""&&<span>{error.typeofbody}</span>}
                <div>
                    <label>Objectives:</label>
                    {objetivos.map((objetivo,indice)=>{
                        return(
                        <div key={indice}>
                            <input
                                type="checkbox"
                                name={objetivo}
                                checked={checkedItems[objetivo]||false}
                                onChange={checkedhandler}
                            />
                            <label>
                                {objetivo}
                            </label>
                        </div>
                        )
                    })}
                </div>
                {error.objetive!==""&&<span>{error.objetive}</span>}
                <button type="Submit">Submit</button>
            </form>
        </div>
    )
}

export default Register;