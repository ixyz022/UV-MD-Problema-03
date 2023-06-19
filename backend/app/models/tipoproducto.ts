import { Model } from 'sequelize'

import { TipoproductoInterface } from '../interfaces/types'

module.exports = (sequelize: any, DataTypes: any) => {
class Tipoproducto extends Model<TipoproductoInterface>
  implements TipoproductoInterface {
    idTipoProducto!: number
    descripcionProducto!: string

}
Tipoproducto.init({
  idTipoProducto: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.STRING,
    autoIncrement: true,
  },
  descripcionProducto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  timestamps: false,
  modelName: 'tipoproducto',
  })
  return Tipoproducto
}
