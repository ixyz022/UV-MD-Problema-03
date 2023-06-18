import { Model } from 'sequelize'

import { GestionInterface } from '../interfaces/types'

module.exports = (sequelize: any, DataTypes: any) => {
  class Gestion extends Model <GestionInterface>
    implements GestionInterface {
    idGestion!: string
    tituloGestion!: string
    descripcionGestion!: string
    idAdmin!: string
    idPublicacion!: string
    
    static associate (_models: any) {
      //Gestion.belongsTo(models.Publicacion)
      // Gestion.hasMany(models.Administrador)
    }
  }
  Gestion.init({
    idGestion: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    tituloGestion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcionGestion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    // foreign Key
    idPublicacion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    idAdmin: {
      type: DataTypes.STRING,
      allowNull: false
    }

  }, {
    sequelize,
    timestamps: false,
    modelName: 'Gestion'
  }
  )
  return Gestion
}
