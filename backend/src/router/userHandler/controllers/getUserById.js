const {User,Favorite} = require("../../../db")

const getUserById = async(id) => {
    const user = await User.findByPk(id,{
        attributes:["name"],
        include:{
            model:Favorite,
            attributes:["fav_name","fav_image"]
        }

    })
    return user
}

module.exports = getUserById;