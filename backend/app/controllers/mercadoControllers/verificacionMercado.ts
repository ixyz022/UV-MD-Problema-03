export const parseNombreMercado = (NombreMercadoFromRequest: any): string => {
  if (!isString(NombreMercadoFromRequest)) {
    throw new Error('Error en el nombre del mercado')
  }
  return NombreMercadoFromRequest
}

export const parseDireccionMercado = (DireccionMercadoFromRequest: any): string => {
  if (!isString(DireccionMercadoFromRequest)) {
    throw new Error('La direccion del mercado no es correcta')
  }
  return DireccionMercadoFromRequest
}

export const isString = (string: string): boolean => {
  return typeof string === 'string'
}
