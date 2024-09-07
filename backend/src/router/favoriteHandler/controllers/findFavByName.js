
const {Favorite} = require("../../../db")

const findFavByName = (name) => {
    const favorite = Favorite.findOne({
        where:{fav_name:name}
    })
    return favorite
}

module.exports = findFavByName;