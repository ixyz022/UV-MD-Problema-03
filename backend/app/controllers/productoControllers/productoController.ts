import db from '../../models'
import { ProductInterface } from '../../interfaces/types'
import * as v from "./verifProducto"

const producto = db.Producto

export const getProductos = async (): Promise<ProductInterface[]> => {
  const productos = await producto.findAll({ where: {}})
  return productos
}

export const postProducto = async (object: any): Promise<ProductInterface> => {
  try {
    const newEntry: ProductInterface = {
      numeroVendedor: await v.parseNumeroVendedor(object.numeroVendedor),
      idComprador: await v.parseIdComprador(object.idComprador),
      idTipoProducto: await v.parseIdTipoProducto(object.idTipoProducto),
      precioCompra: await v.parsePrecioCompra(object.precioCompra),
    };

    return newEntry;
  } catch (error: any) {
    // Manejo de errores
    throw new Error('Error al crear el producto: ' + error.message);
  }
};


