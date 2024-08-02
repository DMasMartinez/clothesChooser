const { DataTypes } = require('sequelize')

const database = require('../db')

module.exports = (database) =>{
    database.define("User",{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey:true,
        },
        name:{
                type:DataTypes.STRING,
                unique:true
            },
        email:{
                    type:DataTypes.STRING,
                },
        image:{
                type:DataTypes.STRING,
                },
    },
    
    )
}