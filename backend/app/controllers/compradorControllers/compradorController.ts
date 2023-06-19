import db from '../../models'
import {  CompradorInterface } from '../../interfaces/types'
import * as v from "./verifComprador"

const comprador = db.Comprador

export const getComprador = async (): Promise< CompradorInterface[]> => {
    const Compradores = await comprador.findAll({ where: {} })
    return Compradores
  }
  
export const postComprador = (object: any):  CompradorInterface => {
    const newEntry:  CompradorInterface = {
      idCompra: 0,
      nombreComprador: v.parseNombreComprador(object.nombreComprador),
  }
  
    return newEntry
  }