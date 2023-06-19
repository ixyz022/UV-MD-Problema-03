import db from '../../models'
import {  VendedorInterface } from '../../interfaces/types'
import * as v from "./verifVendedor"

const Vendedor = db.Vendedor

export const getVendedor = async (): Promise <VendedorInterface[]> => {
  const vendedores = await Vendedor.findAll({ where: {} })
  return vendedores
}
  
export const postVendedor = (object: any):  VendedorInterface => {
  const newEntry:  VendedorInterface = {
    numeroVendedor: 0,
    nombreVendedor: v.parseNombreVendedor(object.nombreVendedor),
  }
  
  return newEntry
}

export const deleteVendedor = async (id: number): Promise<void> => {
  try {
    const vendedor = await Vendedor.findByPk(id);
    
    if (!vendedor) {
      throw new Error('El vendedor con el ID especificado no existe');
    }
    
    await vendedor.destroy();
  } catch (error) {
    return Promise.reject(new Error('Error al eliminar al vendedor'));
  }
};