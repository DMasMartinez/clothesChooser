

const {Router} = require("express")

const favoriteHandler = Router()
const getAllFav = require("../favoriteHandler/controllers/getAllFav")
const createFav = require("../favoriteHandler/controllers/createFav")
const findFavByName = require("../favoriteHandler/controllers/findFavByName")

favoriteHandler.get("/",async(req,res)=>{
    const {fav_name} = req.query
    const allfavorites =fav_name? await findFavByName(fav_name):await getAllFav()
    res.status(200).json(allfavorites)
})

favoriteHandler.post("/",async(req,res)=>{
    const {id} = req.query
    const {fav_name,fav_description,fav_image} = req.body
    const postfav = await createFav({id,fav_name,fav_description,fav_image})
    res.status(200).json(postfav)
})

favoriteHandler.put("/",(req,res)=>{
    const {fav_name,UserId} = req.body
    const desactive = desactiveFav({fav_name,UserId})
    res.status(200).json(desactive)
})


module.exports = favoriteHandler;