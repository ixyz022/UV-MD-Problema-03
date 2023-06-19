"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize("test", "root", "7827", {
    host: "localhost",
    dialect: "sqlite",
    //logging: false
});
exports.default = db;
