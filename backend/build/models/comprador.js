"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Comprador extends sequelize_1.Model {
        // 1: N Comprador : Prducto
        static associate(models) {
            Comprador.hasMany(models.Producto, {
                foreignKey: 'idComprador',
                foreignKeyConstraint: true
            });
        }
    }
    Comprador.init({
        idComprador: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        nombreComprador: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'Comprador',
    });
    return Comprador;
};
