const {User} = require("../../../db")
const getUserByAuth0 = require("../controllers/getUserByAuth0")
const modifyUser = async(id,usuario) => {
    const usertomodify = await getUserByAuth0(id)
    if (usertomodify){
        const newuser = await usertomodify.update({"id":usertomodify.id,"idAuth0":usertomodify.idAuth0,"name":usertomodify.name,"email":usertomodify.email,"image":usertomodify.image,
            "height":usuario.height,"weight":usuario.weight,"body_type":usuario.typeofbody,"objetives":usuario.objective
        })
        return newuser
    }
    throw new Error("user not found")
    
}

module.exports = modifyUser;