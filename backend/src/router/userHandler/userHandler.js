
const {Router} = require("express")
const getAllUser = require("./controllers/getAllUser")
const createUser = require("./controllers/createUser")
const getUserById = require("./controllers/getUserById")
const getUserByName = require("./controllers/getUserByName")
const getUserByAuth0 = require("./controllers/getUserByAuth0")
const userHandler = Router()

userHandler.get("/",async(req,res)=>{
    try{
        const {name} = req.query
        const users =name? await getUserByName(name): await getAllUser()
        res.status(200).json(users)
    }catch(error){
        res.status(500).json({error:error.message})
    }
    
})

userHandler.get("/userbyAuth0",async(req,res)=>{
    try{
        const {idAuth0} = req.query
        const usuario = await getUserByAuth0(idAuth0)
        res.status(200).json(usuario)
    }catch(error){
        res.status(500).json({error:error.message})
    }
})

userHandler.get("/:id",async(req,res)=>{
    try{
        const {id} = req.params
        const findUser = await getUserById(id)
        res.status(200).json(findUser)
    }catch(error){
        res.status(500).json({error:error.message})
    }
    
})



userHandler.post("/",async(req,res)=>{
    try{
        const {name,email,image,idAuth0,weight,height,user_type} = req.body
        const newuser = await createUser({name,email,image,idAuth0,weight,height,user_type})
        res.status(200).json(newuser)
    }catch(error){
        res.status(500).json({error:error.message})
    }
    
})

userHandler.put("/:id",(req,res)=>{
    const {id} = req.params
    const user = req.body
    // const finduser = getUserById(id)
    const newuser = modifyUser(id,user)
    res.status(200).json(newuser)
})


// userHandler.get("/:id",(req,res)=>{
//     return
// })

// userHandler.post("/",(req,res)=>{
//     return
// })
// userHandler.put("/modifyuser",(req,res)=>{
//     return
// })

module.exports = userHandler;
