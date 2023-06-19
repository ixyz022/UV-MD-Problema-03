"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Comprador extends sequelize_1.Model {
    }
    Comprador.init({
        idCompra: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
        },
        nombreComprador: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        sequelize,
        timestamps: false,
        modelName: 'Comprador'
    });
    return Comprador;
};
