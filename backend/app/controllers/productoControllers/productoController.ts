import db from '../../models'
import { ProductInterface } from '../../interfaces/types'
import * as v from "./verifProducto"

const producto = db.Producto

export const getProductos = async (): Promise<ProductInterface[]> => {
  const productos = await producto.findAll({ where: {}})
  return productos
}

export const postProducto = (object: any):  ProductInterface => {
  const newEntry:  ProductInterface = {
  numeroVendedor: v.parseNumeroVendedor(object.idComprador),
  idComprador: v.parseIdComprador(object.idComprador),
  idTipoProducto: v.parseIdTipoProducto(object.idTipoProducto),
  precioCompra: v.parsePrecioCompra(object.precioCompra),
  }

  return newEntry
}