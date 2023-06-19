import { Model } from 'sequelize'

import { VendedorInterface } from '../interfaces/types'

module.exports = (sequelize: any, DataTypes: any) => {
  class Vendedor extends Model <VendedorInterface>
    implements VendedorInterface {
    numeroVendedor!: number
    nombreVendedor!: string
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
    modelName: 'Vendedor'
  })
  return Vendedor
}
