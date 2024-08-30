const {User} = require("../../../db")

const getAllUser = async() =>{
    const allusuarios = await User.findAll()
    return allusuarios
}

module.exports = getAllUser;