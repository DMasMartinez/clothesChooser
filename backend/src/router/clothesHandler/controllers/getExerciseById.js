const {Exercise, Muscle} = require("../../../db")
const getAllMuscles = require("../../muscleHandler/controllers/getAllMuscles")

const getExerciseById = async(id) => {
    const allmuscles = await getAllMuscles()
    const Ejercicio = await Exercise.findByPk(id,{
        include:{
            model:Muscle,
            attributes:["name"],
            through:{
                attributes:[]
            }
        }
    })
    if (Ejercicio){
        const muscledata = Ejercicio.dataValues.muscle
        Ejercicio.dataValues.muscle = muscledata
        return Ejercicio.dataValues
    }
    const ApiExercise = await fetch(`http://localhost:5002/exercises/${id}`)
    const ApiEjercicio = await ApiExercise.json()
    const arraymusculo = ApiEjercicio.muscleInvolved
    const arrayMuscles = arraymusculo.includes(",")?arraymusculo.split(","):[arraymusculo]
    const ideMuscles = allmuscles.filter((muscle)=>arrayMuscles.includes(muscle.name)).map((musc)=>musc.id)

    const newexercise = await Exercise.create({
        "id":ApiEjercicio.id.toString(),
        "name":ApiEjercicio.name,
        "description":ApiEjercicio.description,
        "image":ApiEjercicio.image,
    })
    await newexercise.addMuscle(ideMuscles)
    const result = await Exercise.findOne({
        where:{name:ApiEjercicio.name},
        include: {
            model:Muscle,
            attributes:["name"],
            through:{
                attributes:[]
            }
        }
    })
    return result


}

module.exports = getExerciseById