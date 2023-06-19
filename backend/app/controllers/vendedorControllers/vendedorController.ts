import db from '../../models'
import {  VendedorInterface } from '../../interfaces/types'
import * as v from "./verifVendedor"

const vendedor = db.Vendedor

export const getVendedor = async (): Promise <VendedorInterface[]> => {
  const vendedores = await vendedor.findAll({ where: {} })
  return vendedores
}
  
export const postVendedor = (object: any):  VendedorInterface => {
  const newEntry:  VendedorInterface = {
    numeroVendedor: 0,
    nombreVendedor: v.parseNombreVendedor(object.nombreVendedor),
  }
  
  return newEntry
}