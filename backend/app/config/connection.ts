import { Sequelize } from "sequelize";

const db = new Sequelize("test", "root", "7827", {
    host: "localhost",
    dialect: "sqlite",
    //logging: false
});

export default db;