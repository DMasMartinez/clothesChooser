const { DataTypes } = require('sequelize')

const database = require('../db')

module.exports = (database) =>{
    database.define("Exercises",{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey:true,
        },
        name:{
                type:DataTypes.STRING,
                unique:true
            },
        description:{
                    type:DataTypes.TEXT,
                },
        image:{
                type:DataTypes.STRING,
                },
    },
    
    )
}
