const {User, Favorite} = require("../../../db")

const getAllUser = async() =>{
    const allusuarios = await User.findAll({
        attributes:[
            "idAuth0",
            "name",
            "email",
            "image",
            "weight",
            "height",
            "body_type",
            "objetives",
            "user_type"
        ],
        include:{
            model:Favorite,
            attributes:["fav_name","fav_image"]
        }
    })
    return allusuarios
}

module.exports = getAllUser;