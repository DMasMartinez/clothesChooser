require("dotenv").config();
const { Sequelize } = require("sequelize")
const { USER, PASSWORD, HOST, PORT, BDD, DB_DEPLOY } = process.env;
const database = new Sequelize(
    `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${BDD}`,
    { logging:false }
);

module.exports = database;