import { EstadosPublicacion } from '../../interfaces/types'
import db from '../../models'
const usuario = db.Usuario
const producto = db.Producto

export const parseRutUsuario = (RutUsuarioFromRequest: any): string => {
  if (!isString(RutUsuarioFromRequest)) {
    throw new Error('EL rut es incorrecto')
  }
  return RutUsuarioFromRequest
}

export const parseIdProducto = (IdProductoRequest: any): string => {
  if (!isString(IdProductoRequest)) {
    throw new Error('El id del producto es incorrecto')
  }
  return IdProductoRequest
}

export const parseFotoPublicacion = (FotoPublicacionFromRequest: any): string => {
  if (!isString(FotoPublicacionFromRequest)) {
    throw new Error('Error en la fotografia de la publicacion')
  }
  return FotoPublicacionFromRequest
}

export const parsePrecioPublicacion = (PrecioPublicacionFromRequest: any): number => {
  if (!isNumber(PrecioPublicacionFromRequest)) {
    throw new Error('EL valor introducido al producto no es valido (error desde publicacion)')
  }

  return PrecioPublicacionFromRequest
}

export const parseEstadoPublicacion = (EstadoPublicacionFromRequest: any): EstadosPublicacion => {
  if (!isString(EstadoPublicacionFromRequest) || !isState(EstadoPublicacionFromRequest)) {
    throw new Error('Error al ingresar el estado de la publicacion')
  }
  return EstadoPublicacionFromRequest
}

export const parseTituloPublicacion = (TituloPublicacionFromRequest: any): string => {
  if (!isString(TituloPublicacionFromRequest)) {
    throw new Error('EL titulo de la publicacion no es valido')
  }
  return TituloPublicacionFromRequest
}

export const parseDescripcionPublicacion = (DescripcionPublicacionFromRequest: any): string => {
  if (!isString(DescripcionPublicacionFromRequest)) { 
    throw new Error('La DescripcionPublicacion entregada no es valida')
  }
  return DescripcionPublicacionFromRequest
}

export const isRutUsuario = async (param: any): Promise<boolean> => {
  const RutUsuario = await usuario.findByPk(param).then((resultado: any) => {
    console.log("parametro", param)
    if (resultado == null) {
      return false;
    }
    return resultado instanceof usuario
  })
  return RutUsuario
}

export const isIdProducto = async (param: any): Promise<boolean> => {
  const IdProducto = await producto.findByPk(param).then((resultado: any) => {
    if (resultado == null) {
      return false;
    }
    return resultado instanceof producto
  })
  return IdProducto
}

export const isState = (param: any): boolean => {
  return Object.values(EstadosPublicacion).includes(param)
}

export const isString = (string: string): boolean => {
  return typeof string === 'string'
}

export const isNumber = (number: number): boolean => {
  return typeof number === 'number'
}