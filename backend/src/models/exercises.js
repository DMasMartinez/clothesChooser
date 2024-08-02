const { DataTypes } = require('sequelize')

const database = require('../db')

module.exports = (database) =>{
    database.define("Exercise",{
        id:{
            type: DataTypes.STRING,
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
                }
    },
    
    )
}
