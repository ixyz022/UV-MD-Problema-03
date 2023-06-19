"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Producto extends sequelize_1.Model {
    }
    Producto.init({
        numeroVendedor: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        idComprador: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        idTipoProducto: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        precioCompra: {
            allowNull: false,
            type: DataTypes.INTEGER,
        }
    }, {
        sequelize,
        timestamps: false,
        modelName: 'Producto'
    });
    return Producto;
};
