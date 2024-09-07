
const {Favorite} = require("../../../db")
const findFavByName=require("./findFavByName")

const desactiveFav = ({idAuth0,fav_name,fav_description,fav_image}) => {
    const existFav = findFavByName(fav_name)
    const newfav = {
        fav_id:existFav.fav_id,
        fav_name:existFav.fav_name,
        fav_description:existFav.fav_description,
        fav_image:existFav.fav_image,
        fav_active:"activo"

    }
    if (existFav){
        const showfav = existFav.update(newfav)
    }
    throw new Error("")
}

module.exports = desactiveFav;