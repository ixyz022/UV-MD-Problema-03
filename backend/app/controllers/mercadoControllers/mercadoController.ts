import db from '../../models'
import {  MercadoInterface } from '../../interfaces/types'
import * as v from "./verificacionMercado"
import { v4 as uuidv4} from 'uuid'

const mercado = db.Mercado

export const getMercado = async (): Promise< MercadoInterface[]> => {
    const Mercados = await mercado.findAll({ where: {} })
    console.log(Mercados)
    return Mercados
  }
  
  export const postMercado = (object: any):  MercadoInterface => {
    const newEntry:  MercadoInterface = {
      idMercado: uuidv4(),
      nombreMercado: v.parseNombreMercado(object.nombreMercado),
      direccionMercado: v.parseDireccionMercado(object.direccionMercado),
    }
  
    return newEntry
  }