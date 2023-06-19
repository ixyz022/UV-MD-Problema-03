import db from '../../models';
import { TipoproductoInterface } from '../../interfaces/types';
import * as v from "./verifTipoproducto";

const tipoproducto = db.Tipoproducto;

export const getTipoproducto = async (): Promise<TipoproductoInterface[]> => {
  const tipoproductos = await tipoproducto.findAll({ where: {} });
  return tipoproductos;
}

export const postTipoproducto = (object: any): TipoproductoInterface  => {
  const newEntry: TipoproductoInterface = {
    idTipoProducto: 0,
    descripcionProducto: v.parseDescripcionProducto(object.descripcionProducto),
  }
  return newEntry
}