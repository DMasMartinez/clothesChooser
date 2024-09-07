const {User} = require("../../../db")
const getUserByAuth0 = require("../controllers/getUserByAuth0")
const modifyUser = (id,usuario) => {
    const usertomodify = getUserByAuth0(id)
    if (usertomodify){
        const newuser = usertomodify.update(usuario)
        return newuser
    }
    throw new Error("user not found")
    
}

module.exports = modifyUser;