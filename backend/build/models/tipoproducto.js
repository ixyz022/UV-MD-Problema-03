"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Tipoproducto extends sequelize_1.Model {
        // 1:N Tipoproducto : Producto
        static associate(models) {
            Tipoproducto.hasMany(models.Producto, {
                foreignKey: 'idTipoProducto',
                foreignKeyConstraint: true
            });
        }
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
