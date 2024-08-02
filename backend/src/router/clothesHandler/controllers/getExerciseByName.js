

const {Exercise} = require("../../../db")


const getExerciseByName = (name) =>{
    const getExercise = Exercise.findAll({
        where:{name:name}
    })
    return getExercise
}

module.exports = getExerciseByName;