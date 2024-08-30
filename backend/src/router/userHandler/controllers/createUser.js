const {User} = require("../../../db")

const createUser = async({idAuth0,name,email,image,weight,height,user_type}) => {

    // const nuevouser = await User.create({
    //     idAuth0,
    //     name,
    //     email,
    //     image,
    //     weight,
    //     height,
    //     user_type
    // })
    // return nuevouser
    let nuevoUser = {}
    if (!email){
        throw new Error("your register is wrong because there is not email")
    }else{
        if (idAuth0){
            const chequeauser = await User.findOne({
                where:{
                    idAuth0:idAuth0,
                    email:email
                }
            })
            if (chequeauser){
                throw new Error("the user already exist")
            }
            nuevoUser = await User.create({
                idAuth0,
                name,
                email,
                image,
                weight,
                height,
                user_type:
                    email === "adminpage@gmail.com"||
                    user_type === "admin"? "admin" : "client"
            })
        }else{
            throw new Error("you are still not login")
        }
        return nuevoUser
    }
}

module.exports = createUser;