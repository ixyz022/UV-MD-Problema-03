import { Model } from 'sequelize'

import { ProductInterface } from '../interfaces/types'

module.exports = (sequelize: any, DataTypes: any) => {
class Producto extends Model <ProductInterface>
  implements ProductInterface {
  numeroVendedor!: number
  idComprador!: number
  idTipoProducto!: number
  precioCompra!: number

    // N: 1 Producto : Vendedor
    // N: 1 Producto : Tipoproducto
    // N: 1 Producto : comprador


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
  })
  return Producto
}
