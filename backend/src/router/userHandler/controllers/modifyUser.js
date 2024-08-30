const {User} = require("../../../db")
const getUserById = require("../controllers/getUserById")
const modifyUser = (id,usuario) => {
    const usertomodify = getUserById(id)
    if (usertomodify){
        const newuser = usertomodify.update(usuario)
        return newuser
    }
    throw new Error("user not found")
    
}