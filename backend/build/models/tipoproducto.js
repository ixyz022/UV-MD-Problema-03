"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Tipoproducto extends sequelize_1.Model {
    }
    Tipoproducto.init({
        idTipoProducto: {
            primaryKey: true,
            allowNull: false,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        descripcionProducto: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize,
        timestamps: false,
        modelName: 'Tipoproducto',
    });
    return Tipoproducto;
};
