
const {Favorite} = require("../../../db")
const findFavByName=require("./findFavByName")
const getUserById = require("../../userHandler/controllers/getUserById")

const desactiveFav = async({UserId,fav_name,fav_description,fav_image}) => {
    // const existFav = await findFavByName(fav_name)
    const existFav = await getUserById(UserId)
    const fav = existFav.Favorites.filter((fav)=>fav.fav_name==fav_name)
    const newobject = {
        "fav_name":fav.fav_name,
        "fav_description":fav.fav_description,
        "fav_image":fav.fav_image,
        "fav_active":"inactivo"
    }

    // const newfav = {
    //     fav_id:existFav.fav_id,
    //     fav_name:existFav.fav_name,
    //     fav_description:existFav.fav_description,
    //     fav_image:existFav.fav_image,
    //     fav_active:"activo"
    // }
    if (fav){
        const showfav = await existFav.update(newboject)
        return showfav
    }
    throw new Error("there is no favorite exercise")
}

module.exports = desactiveFav;