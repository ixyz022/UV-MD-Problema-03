import { Model } from 'sequelize'

import { MercadoInterface } from '../interfaces/types'

module.exports = (sequelize: any, DataTypes: any) => {
  class Mercado extends Model <MercadoInterface>
    implements MercadoInterface {
    idMercado!: string
    nombreMercado!: string
    direccionMercado!: string

    static associate (models: any) {
      Mercado.hasMany(models.Seccion, {
        foreignKey: 'idMercado',
        foreignKeyConstraint: true
      })
    }
  }
  Mercado.init({
    idMercado: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.STRING
    },
    nombreMercado: {
      allowNull: false,
      type: DataTypes.STRING
    },
    direccionMercado: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Mercado'
  })
  return Mercado
}
