const { DataTypes } = require('sequelize')

const database = require('../db')

module.exports = (database) =>{
    database.define("Favorite",{
        fav_id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        fav_name:{
                type:DataTypes.STRING,
                unique:true
            },
        fav_description:{
                    type:DataTypes.TEXT,
                },
        fav_image:{
            type:DataTypes.STRING,
            
        },
        fav_active:{
            type:DataTypes.ENUM("activo","inactivo"),
            defaultValue:"activo",
            allowNull:true
        }
    },
    
    )
}