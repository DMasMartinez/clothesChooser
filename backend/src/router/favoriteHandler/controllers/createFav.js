
const {Favorite} = require("../../../db")

const createFav = async({id,fav_name,fav_description,fav_image}) =>{
    if (!id||!fav_name||!fav_description||!fav_image){
        throw new Error("there are attributes missing")
    }
    const newfav = await Favorite.create({
        fav_name,fav_description,fav_image,UserId:id
    })
    return newfav
}

module.exports = createFav;