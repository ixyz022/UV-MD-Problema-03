import { Model } from 'sequelize';
import { CompradorInterface } from '../interfaces/types';

module.exports = (sequelize: any, DataTypes: any) => {
  class Comprador extends Model<CompradorInterface>
    implements CompradorInterface {
    idCompra!: number;
    nombreComprador!: string;
  }

  Comprador.init(
    {
      idCompra: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nombreComprador: {
        type: DataTypes.STRING, // Corregido el tipo a DataTypes.STRING
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'Comprador',
    }
  );

  return Comprador;
};
