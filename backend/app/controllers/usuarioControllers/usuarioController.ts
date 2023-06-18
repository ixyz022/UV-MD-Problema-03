import db from '../../models'
import { UsuarioInterface } from '../../interfaces/types'
import * as v from "./verificacionUsuario"

const usuario = db.Usuario

// Otras modelos
const gestion = db.Gestion
const publicacion = db.Publicacion
const producto = db.Producto

export const getUsuarios = async (): Promise <UsuarioInterface []> => {
    const usuarios: UsuarioInterface [] = await usuario.findAll({ 
      attributes: ["rutUsuario", "nombreUsuario", "correoUsuario", "direccionUsuario"],
      where: {} })
    return usuarios
}

// Mostrar el correo del usuario según su rut
export const getCorreoUsuario = async (object: any): Promise<UsuarioInterface[]> => {
  const rutUsuario = object.rutUsuario

  const correoUsuario: UsuarioInterface [] = await usuario.findOne({ 
    attributes: ["correoUsuario"],
    where: { 
      rutUsuario: v.parseRutUsuario(rutUsuario)
   }})

  return correoUsuario
}

// Obtener todos los usuarios que 
export const getUsuariosGestionados = async (object: any): Promise<UsuarioInterface[]> => {
  const idAdmin = object.idAdmin

  const usuarios = await usuario.findAll({
    attributes: ["rutUsuario", "nombreUsuario", "correoUsuario", "direccionUsuario" ],
    include: [     
    {
      model: publicacion,
      attributes: [],
      include: {
        model: gestion,
        
        attributes: [],
        where : {
          idAdmin: idAdmin
        },
      },
      required: true,
    }
  ]
  });

  return usuarios;
}

export const getUsuariosByPublicacionesRealizadas = async () => {

  const usuariosObtenidos: UsuarioInterface[] = await usuario.findAll({
    include: [
      {
        model: publicacion,
        attributes: ["tituloPublicacion"],
        include: {
          model: producto,
          attributes: ["nombreProducto"],
        },
        required: true,
        order: ["tituloPublicacion"]
      }
    ]
  })

  return usuariosObtenidos
}

export const updateContrasenaUsuario = async (object: any) => {
  const usuarioUpdate = await usuario.findOne({
    where: {
      rutUsuario: v.parseRutUsuario(object.rutUsuario)
    }
  })

  const usuarioUpdated = await usuarioUpdate.update({
    contrasenaUsuario: v.parseContrasenaUsuario(object.contrasenaUsuario)
  })

  return usuarioUpdated
}

export const updateDireccionUsuario = async (object: any) => {
  const usuarioUpdate = await usuario.findOne({
    where: {
      rutUsuario: v.parseRutUsuario(object.rutUsuario)
    }
  })

  const usuarioUpdated = await usuarioUpdate.update({
    contrasenaUsuario: v.parseDireccionUsuario(object.direccionUsuario)
  })

  return usuarioUpdated
}

export const postUsuario = (object: any):  UsuarioInterface  => {
  const newEntry:  UsuarioInterface  = {
  rutUsuario: v.parseRutUsuario(object.rutUsuario),
  nombreUsuario: v.parseNombreUsuario(object.nombreUsuario),
  correoUsuario: v.parseCorreoUsuario(object.correoUsuario),
  contrasenaUsuario: v.parseContrasenaUsuario(object.contrasenaUsuario),
  direccionUsuario: v.parseDireccionUsuario(object.direccionUsuario)
  }
  
  return newEntry
}

export const deleteUsuario = async (object: any) => {
  const usuarioDelete = await usuario.findOne({
    where: {
      rutUsuario: v.parseRutUsuario(object.rutUsuario)
    }
  })

  const usuarioDeleted = await usuarioDelete.destroy();
  return usuarioDeleted;
}