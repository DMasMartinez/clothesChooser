const {Router} = require("express")

const muscleHandler = Router()
const getAllMuscles = require("../muscleHandler/controllers/getAllMuscles")

muscleHandler.get("/", async(req,res)=>{
    const allMuscle = await getAllMuscles()
    res.status(200).json(allMuscle)
})

module.exports = muscleHandler;