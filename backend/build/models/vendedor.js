"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Vendedor extends sequelize_1.Model {
        // 1:N Vendedor : Producto
        static associate(models) {
            Vendedor.hasMany(models.Producto, {
                foreignKey: 'numeroVendedor',
                foreignKeyConstraint: true
            });
        }
    }
    Vendedor.init({
        numeroVendedor: {
            primaryKey: true,
            allowNull: false,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        nombreVendedor: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'Vendedor'
    });
    return Vendedor;
};
