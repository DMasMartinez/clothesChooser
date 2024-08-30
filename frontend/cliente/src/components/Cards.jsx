import Card from "./Card"

const Cards = (props) =>{
    function nextpage(){
        if ((props.array.lenght/props.qt)<props.page){
            props.setPage(props.page+1)
        }else{
            props.setPage(props.page-1)
        }
    }
    function previouspage(){
        if (props.page<1){
            props.setPage(props.page+1)
        }else{
            props.setPage(props.page-1)
        }
    }
    return (
        <div>
            {props.array[0].slice(props.firstval,props.lastval).map((exercise,index)=>{
                return (
                    <div key={index}>
                        
                        <Card
                            id = {exercise.id}
                            name = {exercise.name}
                            muscleInvolved = {exercise.muscleInvolved}
                            description = {exercise.description}
                            image = {exercise.image}
                        />
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

export default Cards