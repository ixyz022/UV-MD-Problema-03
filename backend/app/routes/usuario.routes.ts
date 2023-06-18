import express, { Request, Response } from 'express'
import * as usuarioController from '../controllers/usuarioControllers/usuarioController';
import db from '../models'

const router = express.Router()

// ¿Puedo hacer que estas peticiones se realizen unicamente para un usuario logeado?

router.get('/mostrar', async (_req: Request, res: Response) => {
  try {
    const usuarios = await usuarioController.getUsuarios()
    return res.json(usuarios)
  } catch (error) {
    console.log(error)
    return res.json({ msg: 'Error al mostrar a los usuarios' })
  }
})

router.get('/mostrar/correo', async (req: Request, res: Response) => {
  try {
    const usuarios = await usuarioController.getCorreoUsuario({... req.body})
    return res.json(usuarios)
  } catch (error) {
    console.log(error)
    return res.json({ msg: 'Error al mostrar correo del usuario por su rut'})
  }
})

router.get('/mostrar/admin', async (req: Request, res: Response) => {
  try {
    const usuarios = await usuarioController.getUsuariosGestionados({... req.body})
    return res.json(usuarios)
  } catch (error) {
    console.log(error)
    return res.json({ msg: 'Error al mostrar correo del usuario por su rut' })
  }
})

router.get('/mostrar/publicacion', async (_req: Request, res: Response) => {
  try {
    const usuariosObtenidos = await usuarioController.getUsuariosByPublicacionesRealizadas()
    return res.json(usuariosObtenidos)
  } catch (error) {
    console.log(error)
    return res.json({ msg: 'Error al mostrar a los usuarios que an realizado una publicacion' })
  }
})

router.post('/crear', async (req: Request, res: Response) => {
  try {
    const newUsuarioEntry = usuarioController.postUsuario({ ...req.body })

    const record = db.Usuario.create(newUsuarioEntry)

    return res.json({ record, msg: 'Usuarios subidos correctamente' })
  } catch (error) {
    console.log(error)
    return res.json({msg: 'Error al subir al nuevo usuario' })
  }
})

router.put('/actualizar/contrasena', async (req: Request, res: Response) => {
  try {
    const record = usuarioController.updateContrasenaUsuario({ ...req.body })

    return res.json({ record, recordRecordmsg: 'Contraseña del usuario actualizada correctamente' })
  } catch (error) {
    console.log(error)
    return res.json({ msg: 'Error al actualizar al nuevo usuario' })
  }
})

router.put('/actualizar/direccion', async (req: Request, res: Response) => {
  try {
    const record = usuarioController.updateDireccionUsuario({ ...req.body })

    return res.json({ record, recordRecordmsg: 'Direccion del usuario actualizada correctamente' })
  } catch (error) {
    console.log(error)
    return res.json({ msg: 'Error al actualizar al usuario' })
  }
})

router.delete('/eliminar', async (req: Request, res: Response) => {
  try {
    const record = usuarioController.deleteUsuario({ ...req.body })

    return res.json({ record, recordRecordmsg: 'Usuario eliminado correctamente' })
  } catch (error) {
    console.log(error)
    return res.json({ msg: 'Error al eliminar al usuario' })
  }
})

export default router