
const {Router} = require("express")
const clothesHandler = Router()
const getAllClothes = require("./controllers/getAllClothes")


clothesHandler.get("/", (req,res)=>{
    const allClothes = getAllClothes()
    res.status(200).json(getAllClothes)
    
})

module.exports = clothesHandler;