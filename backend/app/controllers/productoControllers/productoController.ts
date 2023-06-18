import db from '../../models'
import { ProductInterface } from '../../interfaces/types'
import { v4 as uuidv4 } from 'uuid'
import * as v from "./verificacionProducto"
//import { Op } from 'sequelize'

const producto = db.Producto

// Otras BD
const seccion = db.Seccion
const mercado = db.Mercado

export const getProductos = async (): Promise<ProductInterface[]> => {
  const productos = await producto.findAll({ where: {}})
  return productos
}

// 
export const getAllProductosByMercado = async (object: any) => {

  const nombreMercado = object.nombreMercado

  const productosByMercado: ProductInterface[] = await producto.findAll({
    attributes: ["nombreProducto"],
    include: [
      {
        model: seccion,
        attributes: ["nombreSeccion"],
        include: {
          model: mercado,
          attributes: ["nombreMercado", "direccionMercado"],
          where: {
            nombreMercado: nombreMercado
          }
        },
        required: true,
        order: ["nombreSeccion"]
      }
    ]

  })

  return productosByMercado
}

export const getAllProductosByNotSeccion = async () => {
  const productoByNoSeccion: ProductInterface[] = await producto.findAll({
    producto

    
    
    //order: ["tipoProducto"]

  })

  console.log(productoByNoSeccion)

  return productoByNoSeccion
}


export const getAllProductosById = async (object: any): Promise<ProductInterface[]> => {
  const productos = await producto.findAll({ where: { idPRoducto: object } });
  return productos
}

export const postProducto = (object: any):  ProductInterface => {
  const newEntry:  ProductInterface = {
  idProducto: uuidv4(),
  nombreProducto: v.parseNombreProducto(object.nombreProducto),
  marcaProducto: v.parseMarcaProducto(object.marcaProducto),
  tipoProducto: v.parseTipoProducto(object.tipoProducto),
  }

  return newEntry
}