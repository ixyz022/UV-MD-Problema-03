import { Model } from 'sequelize'

import { SeccionInterface } from '../interfaces/types'

module.exports = (sequelize: any, DataTypes: any) => {
  class Seccion extends Model <SeccionInterface>
    implements SeccionInterface {
    idSeccion!: string
    nombreSeccion!: string
    idProducto!: string
    idMercado!: string
    static associate (models: any) {
      Seccion.belongsTo(models.Mercado, {
        foreignKey: "idMercado",
        foreignKeyConstraint: true
      }),
      Seccion.belongsTo(models.Producto, {
        foreignKey: "idProducto",
        foreignKeyConstraint: true
      })
    }
  }
  Seccion.init({
    idSeccion: {
      primaryKey: true,
      type: DataTypes.STRING,

      allowNull: false
    },
    nombreSeccion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    idProducto: {
      type: DataTypes.STRING,
      allowNull: false
    },
    idMercado: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Seccion'
  })
  return Seccion
}
