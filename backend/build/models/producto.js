"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Producto extends sequelize_1.Model {
        // N: 1 Producto : Vendedor
        static associate(models) {
            Producto.belongsTo(models.Vendedor, {
                foreignKey: 'numeroVendedor',
                foreignKeyConstraint: true
            }),
                Producto.belongsTo(models.Tipoproducto, {
                    foreignKey: 'idTipoProducto',
                    foreignKeyConstraint: true
                }),
                Producto.belongsTo(models.Comprador, {
                    foreignKey: 'idComprador',
                    foreignKeyConstraint: true
                });
        }
    }
    Producto.init({
        numeroVendedor: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
                model: 'Vendedor',
                key: 'numeroVendedor'
            }
        },
        idComprador: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
                model: 'Comprador',
                key: 'idComprador'
            }
        },
        idTipoProducto: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
                model: 'Tipoproducto',
                key: 'idTipoproducto'
            }
        },
        precioCompra: {
            allowNull: false,
            type: DataTypes.INTEGER,
        }
    }, {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'Producto'
    });
    Producto.removeAttribute('id');
    return Producto;
};
