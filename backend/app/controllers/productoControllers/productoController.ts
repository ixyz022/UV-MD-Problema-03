import db from '../../models'
import { ProductInterface } from '../../interfaces/types'
import * as v from "./verifProducto"

const Producto = db.Producto

export const getProductos = async (): Promise<ProductInterface[]> => {
  const productos = await Producto.findAll({ where: {}})
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

export const deleteProducto = async (id: number): Promise<void> => {
  try {
    const producto = await Producto.findByPk(id);
    
    if (!producto) {
      throw new Error('El producto con el ID especificado no existe');
    }
    
    await producto.destroy();
  } catch (error: any) {
    throw new Error('Error al eliminar el producto: ' + error.message);
  }
};


