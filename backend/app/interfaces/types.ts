export interface AdminInterface {
  idAdmin: string
  nombreAdmin: string
  contrasenaAdmin: string
}

export interface GestionInterface {
  idGestion: string
  tituloGestion: string
  descripcionGestion: string
  idAdmin: string
  idPublicacion: string
}

export interface PublicacionInterface {
  idPublicacion: string
  rutUsuario: string
  idProducto: string
  fotoPublicacion: string
  precioPublicacion: number
  estadoPublicacion: EstadosPublicacion
  tituloPublicacion: string
  descripcionPublicacion: string
}

// Privacidad del rut del usuario
//export type PublicacionWithoutRutUsuario = Omit<PublicacionInterface, 'rutUsuario'>

// Hacer consulta

//export type PublicacionInterface = Omit<PublicacionXUserXProductoInterface, 'userRut' | 'idProducto'>
//export type PublicacionInterface = Pick<PublicacionXUserXProductoInterface, 'idPublicacion' | 'photo'|  'price'|  'state' |  'title' | 'description' >


export enum EstadosPublicacion {
  Malo = 'Malo',
  MedianamenteMalo = 'MedianamenteMalo',
  Intermedio = 'Intermedio',
  MedianamenteBueno = 'MedianamenteBueno',
  Buena = 'Bueno',
}

export interface UsuarioInterface {
  rutUsuario: string
  nombreUsuario: string
  correoUsuario: string
  contrasenaUsuario: string
  direccionUsuario: string
}

export type CorreoUsuario = Pick<UsuarioInterface , 'correoUsuario' >

//interface Male extends Person

//export type SeccionInterface = Omit<SeccionXProductoXMercadoInterface, 'idProducto' | 'idMercado'>
export interface ProductInterface {
  idProducto: string
  nombreProducto: string
  marcaProducto: string
  tipoProducto: string
}

export interface SeccionInterface {
  idSeccion: string
  nombreSeccion: string
  idProducto: string
  idMercado: string
}


export interface MercadoInterface {
  idMercado: string
  nombreMercado: string
  direccionMercado: string
}