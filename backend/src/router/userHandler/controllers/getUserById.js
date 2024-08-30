const {User} = require("../../../db")

const getUserById = (id) => {
    const user = User.findByPk(id)
    return user
}

module.exports = getUserById;