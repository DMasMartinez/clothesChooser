const {User} = require("../../../db")

const getUserByName = (name) => {
    const usuario = User.findOne({
        where:{name:name}
    })
    return usuario
}

module.exports = getUserByName;