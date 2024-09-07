require("dotenv").config();
const { Sequelize } = require("sequelize")
const { USER, PASSWORD, HOST, PORT, BDD, DB_DEPLOY } = process.env;
exercisefunction = require("./models/exercises")
muscleInvolvedfunction = require("./models/muscles")
userfunction = require("./models/users")
favfunction = require("./models/favorites")
const database = new Sequelize(
    `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${BDD}`,
    { logging:false }
);
exercisefunction(database)
muscleInvolvedfunction(database)
userfunction(database)
favfunction(database)

const {Exercise, Muscle, User, Favorite} = database.models;

Exercise.belongsToMany(Muscle,{through: "ExercisesMuscles"})
Muscle.belongsToMany(Exercise,{through:"ExercisesMuscles"})

User.hasMany(Favorite)
Favorite.belongsTo(User)

// Favorite.hasMany(Exercise)
// Exercise.belongsTo(Favorite)

module.exports = {
    database,
    ...database.models
};