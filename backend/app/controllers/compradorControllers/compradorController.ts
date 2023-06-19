import db from '../../models'
import {  CompradorInterface } from '../../interfaces/types'
import * as v from "./verifComprador"

const Comprador = db.Comprador

export const getComprador = async (): Promise< CompradorInterface[]> => {
    const compradores = await Comprador.findAll({ where: {} })
    return compradores
}
  
export const postComprador = (object: any):  CompradorInterface => {
    const newEntry:  CompradorInterface = {
      idComprador: 0,
      nombreComprador: v.parseNombreComprador(object.nombreComprador),
  }
  
    return newEntry
  }

export const deleteComprador = async (id: number): Promise<void> => {
  try {
    const comprador = await Comprador.findByPk(id);
    
    if (!comprador) {
      throw new Error('El comprador con el ID especificado no existe');
    }
    
    await comprador.destroy();
  } catch (error) {
    return Promise.reject(new Error('Error al eliminar al comprador'));
  }
};
