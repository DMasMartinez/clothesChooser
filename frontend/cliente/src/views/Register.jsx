import { useEffect, useState } from "react";
import { useAsyncError } from "react-router-dom";

const Register = () =>{
    const [weigh,setWeigh] = useState([])
    const [heigh,setHeigh] = useState([])
    const [checkedItems,setCheckedItems]=useState({})
    const bodies = ["Ectomorfo","Mesomorfo","Endomorfo"]
    const objetivos = ["get thinner", "get bulking", "define"]
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
    const [user,setUser]=useState({
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
            setUser({...user,height:event.target.value})
        }
        if (event.target.name==="weight"){
            setUser({...user,weight:event.target.value})
        }
        if (event.target.name==="typeofbody"){
            setUser({...user,typeofbody:event.target.value})
        }
        if (event.target.name==="objective"){
            setUser({...user,objective:""})
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
                {/* <label htmlFor="typeofbody">
                    Body:
                </label>
                <select name="typeofbody" type="string" value={user.height} onChange={changeinput}>
                    <option>
                        Ectomorfo
                    </option>
                    <option>
                        Mesomorfo
                    </option>
                    <option>
                        Endomorfo
                    </option>
                </select> */}
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
                {/* <label htmlFor="height">
                    Height:
                </label>
                <input name="objective" type="string" value={user.height} onChange={changeinput}/> */}
                <button type="Submit">Submit</button>
            </form>
        </div>
    )
}

export default Register;