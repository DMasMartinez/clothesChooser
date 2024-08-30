const {Exercise, Muscle} = require("../../../db")


const getAllClothes = () =>{
    const allgames = Exercise.findAll({
        include:{
            model: Muscle,
            attributes:["name"],
            through:{
                attributes:[]
            }
        }
    })
    return allgames
}

module.exports = getAllClothes;