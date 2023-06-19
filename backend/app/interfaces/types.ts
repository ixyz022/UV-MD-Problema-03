export interface VendedorInterface {
  numeroVendedor: number
  nombreVendedor: string
}
export interface CompradorInterface {
  idCompra: number
  nombreComprador: string
}
export interface TipoproductoInterface {
  idTipoProducto: number
  descripcionProducto: string
}
export interface ProductInterface {
  numeroVendedor: number
  idComprador: number
  idTipoProducto: number
  precioCompra: number
}