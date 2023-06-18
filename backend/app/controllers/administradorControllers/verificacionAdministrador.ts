export const parseContrasenaAdmin = (ContrasenaAdminFromRequest: any): string => {
  if (!isString(ContrasenaAdminFromRequest)) {
    throw new Error('Error al verificar la contraseña del administrador')
  }
  return ContrasenaAdminFromRequest
}

export const parseNombreAdmin = (NombreAdminFromRequest: any): string => {
  if (!isString(NombreAdminFromRequest)) {
    throw new Error('Error al verificar el nombre del administrador')
  }
  return NombreAdminFromRequest
}


export const isString = (string: string): boolean => {
  return typeof string === 'string'
}

