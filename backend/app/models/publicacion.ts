import { Model } from 'sequelize'

import { PublicacionInterface, EstadosPublicacion } from '../interfaces/types'

module.exports = (sequelize: any, DataTypes: any) => {
class Publicacion extends Model<PublicacionInterface>
  implements PublicacionInterface {
    idPublicacion!: string
    rutUsuario!: string
    idProducto!: string
    fotoPublicacion!: string
    precioPublicacion!: number
    estadoPublicacion!: EstadosPublicacion
    tituloPublicacion!: string
    descripcionPublicacion!: string

  static associate (models: any) {
    // Publicacion.belongsTo(models.Usuario)
    Publicacion.hasMany(models.Gestion, {
      foreignKey: 'idPublicacion',
      foreignKeyConstraint: true
    }),
    Publicacion.belongsTo(models.Producto, {
      foreignKey: "idProducto",
      foreignKeyConstraint: true
    })
  }
}
Publicacion.init({
  idPublicacion: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  fotoPublicacion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  precioPublicacion: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false
  },
  estadoPublicacion: {
    type: DataTypes.STRING,
    // Atributo de tipo enum declarado en la interfaz
    allowNull: false
  },
  tituloPublicacion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcionPublicacion: {
    type: DataTypes.STRING,
    allowNull: false
  },
    
  // Foreign keys
  rutUsuario: {
    type: DataTypes.STRING,
    allowNull: false
  },
  idProducto: {
  type: DataTypes.STRING,
  allowNull: false
  }
}, {
  sequelize,
  timestamps: false,
  modelName: 'Publicacion'
  })
  return Publicacion
}
