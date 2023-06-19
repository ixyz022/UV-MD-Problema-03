import db from '../../models';
import { TipoproductoInterface } from '../../interfaces/types';
import * as v from "./verifTipoproducto";

const Tipoproducto = db.Tipoproducto;

export const getTipoproducto = async (): Promise<TipoproductoInterface[]> => {
  const tipoproductos = await Tipoproducto.findAll({ where: {} });
  return tipoproductos;
}

export const postTipoproducto = (object: any): TipoproductoInterface  => {
  const newEntry: TipoproductoInterface = {
    idTipoProducto: 0,
    descripcionProducto: v.parseDescripcionProducto(object.descripcionProducto),
  }
  return newEntry
}

export const deleteTipoproducto = async (id: number): Promise<void> => {
  try {
    const tipoProducto = await Tipoproducto.findByPk(id);
    
    if (!tipoProducto) {
      throw new Error('El tipoProducto con el ID especificado no existe');
    }
    
    await tipoProducto.destroy();
  } catch (error) {
    return Promise.reject(new Error('Error al eliminar al tipoProducto'));
  }
};