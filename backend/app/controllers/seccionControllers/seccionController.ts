import db from '../../models';
import { SeccionInterface } from '../../interfaces/types';
import { v4 as uuidv4 } from 'uuid';
import * as v from "./verificacionSeccion";

const Seccion = db.Seccion;

export const getSecciones = async (): Promise<SeccionInterface[]> => {
  const Secciones = await Seccion.findAll({ where: {} });
  return Secciones;
}

export const VerifNewSeccion = async (param: any): Promise<boolean> => {
  const verifIdMercado = await v.isIdMercado(param.idMercado);
  const verifIdProducto = await v.isIdProducto(param.idProducto)
  if (!verifIdMercado) {
    throw new Error("El identificador del Mercado es incorrecto")
  }
  if (!verifIdProducto) {
    throw new Error("El identificador del producto es incorrecto")
  }
  return true
}

export const postSeccion = (object: any): SeccionInterface => {
  const newEntry: SeccionInterface = {
    idSeccion: uuidv4(),
    nombreSeccion: v.parseNombreSeccion(object.nombreSeccion),
    idProducto: v.parseIdProducto(object.idProducto),
    idMercado: v.parseIdMercado(object.idMercado)
  }
  return newEntry
}