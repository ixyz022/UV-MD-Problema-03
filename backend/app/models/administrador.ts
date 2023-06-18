import { Model } from 'sequelize'

import { AdminInterface } from '../interfaces/types'

module.exports = (sequelize: any, DataTypes: any) => {
  class Administrador extends Model<AdminInterface>
    implements AdminInterface {
    idAdmin!: string
    nombreAdmin!: string
    contrasenaAdmin!: string
    
    static associate (models: any) {
      Administrador.hasMany(models.Gestion, {
        foreignKey: 'idAdmin',
        foreignKeyConstraint: true
      })
    }
  }
  Administrador.init({
    idAdmin: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.STRING
    },
    nombreAdmin: {
      allowNull: false,
      type: DataTypes.STRING
    },
    contrasenaAdmin: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Administrador'
  })
  return Administrador
}
