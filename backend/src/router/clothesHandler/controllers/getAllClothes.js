const {Exercise} = require("../../../db")


const getAllClothes = () =>{
    const allgames = Exercise.findAll()
    return allgames
}

module.exports = getAllClothes;