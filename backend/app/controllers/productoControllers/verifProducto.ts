export const parseNumeroVendedor = (NumeroVendedorFromRequest: any): number => {
  if (!isNumber(NumeroVendedorFromRequest)) {
    throw new Error('El numero del vendedor no concuerda con uno existente')
  }
  return NumeroVendedorFromRequest
}

export const parseIdComprador = (IdCompradorFromRequest: any): number => {
  if (!isNumber(IdCompradorFromRequest)) {
    throw new Error('El id del producto no concuerda con uno existente')
  }
  return IdCompradorFromRequest
}

export const parseIdTipoProducto = (IdTipoProductoFromRequest: any): number => {
  if (!isNumber(IdTipoProductoFromRequest)) {
    throw new Error('El id del tipo del producto no concuerda con uno existente')
  }
  return IdTipoProductoFromRequest
}

export const parsePrecioCompra = (PrecioCompraFromRequest: any): number => {
  if (!isNumber(PrecioCompraFromRequest)) {
    throw new Error('El precio de la compra no es correcto')
  }
  return PrecioCompraFromRequest
}

export const isNumber = (number: number): boolean => {
  return typeof number=== 'number'
}