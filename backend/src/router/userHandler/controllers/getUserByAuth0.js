const {User,Exercise} = require("../../../db")

const getUserByAuth0 = async(idAuth0) => {
    const usuario = await User.findOne({
        where:{idAuth0:idAuth0}
    })
    return usuario
}

module.exports = getUserByAuth0;