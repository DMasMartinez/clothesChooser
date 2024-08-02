require("dotenv").config();
const { Sequelize } = require("sequelize")
const { USER, PASSWORD, HOST, PORT, BDD, DB_DEPLOY } = process.env;
exercisefunction = require("./models/exercises")
muscleInvolvedfunction = require("./models/muscles")
userfunction = require("./models/users")
const database = new Sequelize(
    `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${BDD}`,
    { logging:false }
);
exercisefunction(database)
muscleInvolvedfunction(database)
userfunction(database)

const {Exercise, Muscle, User} = database.models;

Exercise.belongsToMany(Muscle,{through: "ExercisesMuscles"})
Muscle.belongsToMany(Exercise,{through:"ExercisesMuscles"})
module.exports = {
    database,
    ...database.models
};