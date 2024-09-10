const {User,Exercise,Favorite} = require("../../../db")

const getUserByAuth0 = async(idAuth0) => {
    const usuario = await User.findOne({
        where:{idAuth0:idAuth0},
        include:{
            model:Favorite,
            attributes:["fav_name", "fav_image"]
        }
    })
    return usuario
}

module.exports = getUserByAuth0;