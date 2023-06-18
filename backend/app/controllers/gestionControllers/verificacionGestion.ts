import db from '../../models'
const administrador = db.Administrador
const publicacion = db.Publicacion

export const parseTituloGestion = (TituloGestionFromRequest: any): string => {
  if (!isString(TituloGestionFromRequest)) {
    throw new Error('Error en el titulo de la gestion')
  }
  return TituloGestionFromRequest
}

export const parseDescripcionGestion = (DescriptionFromRequest: any): string => {
  if (!isString(DescriptionFromRequest)) {
    throw new Error('Error en la descripcion de la gestion')
  }
  return DescriptionFromRequest
}

export const parseIdPublicacion = (IdPublicacionFromRequest: any): string => {
  if (!isString(IdPublicacionFromRequest)) {
    throw new Error('La identifacion de la publicaion no es valida')
  }
  return IdPublicacionFromRequest
}

export const parseIdAdmin = (IdAdminFromRequest: any): string => {
  if (!isString(IdAdminFromRequest)) { 
    throw new Error('La EL identifacor del administrador no es valido')
  }
  return IdAdminFromRequest
}

export const isIdAdmin = async (param: any): Promise<boolean> => {
  const idAdmin = await administrador.findByPk(param).then((resultado: any) => {
    if (resultado == null) {
      return false;
    }
    return resultado instanceof administrador
  })
  return idAdmin
}

export const isIdPublicacion = async (param: any): Promise<boolean> => {
  const idPublicacion = await publicacion.findByPk(param).then((resultado: any) => {
    if (resultado == null) {
      return false;
    }
    return resultado instanceof publicacion
  })
  return idPublicacion
}

export const isString = (string: string): boolean => {
  return typeof string === 'string'
}
