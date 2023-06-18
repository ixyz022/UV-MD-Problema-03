import { Model } from 'sequelize'
import { UsuarioInterface  } from '../interfaces/types'

module.exports = (sequelize: any, DataTypes: any) => {
class Usuario extends Model<UsuarioInterface >
  implements UsuarioInterface  {
  rutUsuario!: string
  nombreUsuario!: string
  correoUsuario!: string
  contrasenaUsuario!: string
  direccionUsuario!: string

  static associate (models: any) {
    Usuario.hasMany(models.Publicacion, {
      foreignKey: 'rutUsuario',
      foreignKeyConstraint: true
    })
  }
}
Usuario.init({
  rutUsuario: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  nombreUsuario: {
    type: DataTypes.STRING,
    allowNull: false
  },
  correoUsuario: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contrasenaUsuario: {
    type: DataTypes.STRING,
    allowNull: false
  },
  direccionUsuario: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  timestamps: false,
  modelName: 'Usuario'
  })
  return Usuario
}
