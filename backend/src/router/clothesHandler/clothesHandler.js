
const {Router} = require("express")
const clothesHandler = Router()
const getAllClothes = require("./controllers/getAllClothes")
const getExerciseById = require("./controllers/getExerciseById")
const getExerciseByName = require("./controllers/getExerciseByName")

// clothesHandler.get("/", async(req,res)=>{
//     try{
//         const allClothes = await getAllClothes()
//         res.status(200).json(getAllClothes)
//     }catch(error){
//         res.status(500).json({error:error.message})
//     }
    
    
// })

clothesHandler.get("/", async(req,res)=>{
    try{
        const {name} = req.query
        const exerciseToShow = name?await getExerciseByName(name):await getAllClothes()
        res.status(200).json(exerciseToShow)
    }catch(error){
        res.status(500).json({error:error.message})
    }
})

clothesHandler.get("/:id", async(req,res)=>{
    try{
        const {id} = req.params;
        const exerciseById = await getExerciseById(id)
        res.status(200).json(exerciseById)
    }catch(error){
        res.status(500).json({error:error.message})
    }
   
})



module.exports = clothesHandler;