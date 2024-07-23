require("dotenv").config();
const { Sequelize } = require("sequelize")
const { USER, PASSWORD, HOST, PORT, BDD, DB_DEPLOY } = process.env;
exercisefunction = require("./models/exercises")
muscleInvolvedfunction = require("./models/muscles")
const database = new Sequelize(
    `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${BDD}`,
    { logging:false }
);
exercisefunction(database)
muscleInvolvedfunction(database)
module.exports = {
    database,
    ...database.models
};