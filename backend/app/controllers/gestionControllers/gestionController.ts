import db from '../../models';
import { GestionInterface } from '../../interfaces/types';
import { v4 as uuidv4 } from 'uuid';
import * as v from "./verificacionGestion";

const gestion = db.Gestion;

export const getGestiones = async (): Promise<GestionInterface[]> => {
  const gestiones = await gestion.findAll({ where: {} });
  return gestiones;
}

export const postgestion = (object: any): GestionInterface  => {
  const newEntry: GestionInterface = {
    idGestion: uuidv4(),
    tituloGestion: v.parseTituloGestion(object.tituloGestion),
    descripcionGestion: v.parseDescripcionGestion(object.descripcionGestion),
    idAdmin: v.parseIdAdmin(object.idAdmin),
    idPublicacion: v.parseIdPublicacion(object.idPublicacion)
    
  }
  return newEntry
}

export const VerifNewGestion = async (param: any): Promise<boolean> => {
  const verifIdAdmin = await v.isIdAdmin(param.idAdmin);
  const verifIdPublicacion = await v.isIdPublicacion(param.idPublicacion)
  if (!verifIdAdmin) {
    throw new Error("El identificador del administrador es incorrecto")
  }
  if (!verifIdPublicacion) {
    throw new Error("El identificador de la publicion es incorrecto")
  }
  return true
}