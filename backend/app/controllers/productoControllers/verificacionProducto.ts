export const parseNombreProducto = (NombreProductoFromRequest: any): string => {
  if (!isString(NombreProductoFromRequest)) {
    throw new Error('Error en el nombre del producto')
  }
  return NombreProductoFromRequest
}

export const parseMarcaProducto = (MarcaProductoFromRequest: any): string => {
  if (!isString(MarcaProductoFromRequest)) {
    throw new Error('Error en la marca del producto')
  }
  return MarcaProductoFromRequest
}

export const parseTipoProducto = (TipoProductoFromRequest: any): string => {
  if (!isString(TipoProductoFromRequest)) {
    throw new Error('Error en la marca del producto')
  }
  return TipoProductoFromRequest
}

export const isString = (string: string): boolean => {
  return typeof string === 'string'
}