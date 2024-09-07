
const {Favorite} = require("../../../db")

const getAllFav =async()=>{
    const favorites = await Favorite.findAll()
    return favorites
}

module.exports = getAllFav;