const { DataTypes } = require('sequelize')

const database = require('../db')

module.exports = (database) =>{
    database.define("User",{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey:true,
        },
        idAuth0:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        name:{
                type:DataTypes.STRING,
                unique:true,
                allowNull:false
            },
        email:{
                    type:DataTypes.STRING,
                    allowNull:false
                },
        image:{
                type:DataTypes.STRING,
                allowNull:false
                },
        weight:{
            type: DataTypes.FLOAT,
            allowNull: true
        },
        height:{
            type: DataTypes.FLOAT,
            allowNull:true
        },
        body_type:{
            type:DataTypes.STRING,
            allowNull:true

        },
        objetives:{
            type: DataTypes.STRING,
            allowNull:true
        },
        user_type: {
            type: DataTypes.ENUM("client", "admin"),
            defaultValue: "client",
            allowNull: true,
        },
    },
    
    )
}