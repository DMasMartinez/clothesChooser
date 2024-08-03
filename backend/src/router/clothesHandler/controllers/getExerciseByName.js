

const {Exercise, Muscle} = require("../../../db")
const getAllMuscles = require("../../muscleHandler/controllers/getAllMuscles")


const getExerciseByName = async(name) =>{
    const allmuscles = await getAllMuscles()
    const getExercise = await Exercise.findOne({
        where:{name:name},
        include:{
            model: Muscle,
            attributes:["name"],
            through:{
                attributes:[]
            }
        }
    })
    if (getExercise){
        const muscles = getExercise.dataValues.musculos
        getExercise.dataValues.musculos = muscles
        return getExercise.dataValues
    }
    const ApiExercise = await fetch(`http:localhost:5002/exercises/?name=${name}`)
    const data = await ApiExercise.json()
    const arraymusculo = data.map((Exercise)=>Exercise.muscleInvolved)
    const arrayMuscles = arraymusculo.includes(",")?arraymusculo.split(","):arraymusculo
    const ideMuscles = allmuscles.filter((muscle)=>arrayMuscles.includes(muscle.name)).map((musc)=>musc.id)

    // data.map(async(exerc)=>{

    //     const[ejercicio] = Exercise.create({
    //         "id":exerc.id.toString(),
    //         "name":exerc.name,
    //         "description":exerc.description,
    //         "image":exerc.image,
    //     })
    //     return ejercicio.dataValues
        
    // })
  
    const newexercise = await Exercise.create({
        "id":data[0].id.toString(),
        "name":data[0].name,
        "image":data[0].image,
        "description":data[0].description
        })
    await newexercise.addMuscle(ideMuscles)

    const result = await Exercise.findOne({
        where:{name:data[0].name},
        include: {
            model:Muscle,
            attributes:["name"],
            through:{
                attributes:[]
            }
        }
    })
    // return result
    return result
}

module.exports = getExerciseByName;