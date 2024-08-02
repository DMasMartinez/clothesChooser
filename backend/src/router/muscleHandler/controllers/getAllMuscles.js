
const {Exercise,Muscle} = require("../../../db")
const getAllClothes = require("../../clothesHandler/controllers/getAllClothes")


const getAllMuscles = async() =>{
    const getAllExer = await fetch("http://localhost:5002/exercises")
    const exercisess = await getAllExer.json()
    const AllMuscles = exercisess.map((exer) =>exer.muscleInvolved).filter(muscle=>muscle!==null)
    const setMuscle = new Set(AllMuscles)
    // for (var i=0;i<=AllMuscles.length;i++){
    //     setMuscle.add(AllMuscles[i])    
    // }
    const arrayMuscle = [...setMuscle]
    // const arraynonull = arrayMuscle.reduce((acc,muscle)=>{
    //     if (muscle!==null){
    //         acc.push(muscle)
    //     }
    //     return acc
    // },[]) 
    let arraytoshow = []
    for (var i=0;i<=arrayMuscle.length-1;i++){
        await Muscle.findOrCreate({
            where:{"name":arrayMuscle[i]}
        })
    }
    const muscletoshow = await Muscle.findAll()
    return muscletoshow
    // arraytoshow = await Promise.all(arraynonull.map(async(muscle)=>{
    //     const [musc] = await Muscle
    // }))
}

module.exports = getAllMuscles;