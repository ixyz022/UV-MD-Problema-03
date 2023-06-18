import { Model } from 'sequelize'

import { ProductInterface } from '../interfaces/types'

module.exports = (sequelize: any, DataTypes: any) => {
class Producto extends Model <ProductInterface>
  implements ProductInterface {
  idProducto!: string
  nombreProducto!: string
  marcaProducto!: string
  tipoProducto!: string

  static associate (models: any) {
    Producto.hasMany(models.Publicacion, {
      foreignKey: 'idProducto',
      foreignKeyConstraint: true
    }),
    Producto.hasMany(models.Seccion, {
      foreignKey: 'idProducto',
      foreignKeyConstraint: true
    })
  }
}
Producto.init({
  idProducto: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.STRING
  },
  nombreProducto: {
    allowNull: false,
    type: DataTypes.STRING
  },
  marcaProducto: {
    allowNull: false,
    type: DataTypes.STRING
  },
  tipoProducto: {
    allowNull: false,
    type: DataTypes.STRING
  }
}, {
  sequelize,
  timestamps: false,
  modelName: 'Producto'
  })
  return Producto
}
