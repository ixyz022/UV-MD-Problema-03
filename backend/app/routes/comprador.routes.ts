import express, { Request, Response } from 'express'
import * as CompradorControllers from '../controllers/compradorControllers/compradorController';
import db from '../models'

const router = express.Router()

// ¿Puedo hacer que estas peticiones se realizen unicamente para un usuario logeado?

router.get('/mostrar', async (_req: Request, res: Response) => {
  try {
    const usuarios = await CompradorControllers.getComprador()
    return res.json(usuarios)
  } catch (error: any) {
    return res.json({ msg: 'Error al mostrar los compradores' + error.message })
  }
})


router.post('/crear', async (req: Request, res: Response) => {
  try {
    const newCompradorEntry = CompradorControllers.postComprador({ ...req.body })

    const record = db.Comprador.create(newCompradorEntry)

    return res.json({ record, msg: 'Comprador subido correctamente' })
  } catch (error: any) {
    return res.json({msg: 'Error al subir al comprador' + error.message})
  }
})

router.delete('/eliminar/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    
    await CompradorControllers.deleteComprador(id);
    
    return res.json({ msg: 'Comprador eliminado correctamente' });
  } catch (error: any) {
    return res.json({ msg: 'Error al eliminar al comprador' + error.message});
  }
});



export default router


/* 
router.get('/mostrar/correo', async (req: Request, res: Response) => {
  try {
    const usuarios = await CompradorControllers.getCorreoComprador({... req.body})
    return res.json(usuarios)
  } catch (error) {
    console.log(error)
    return res.json({ msg: 'Error al mostrar correo del usuario por su rut'})
  }
})

router.get('/mostrar/admin', async (req: Request, res: Response) => {
  try {
    const usuarios = await CompradorControllers.getCompradorGestionados({... req.body})
    return res.json(usuarios)
  } catch (error) {
    console.log(error)
    return res.json({ msg: 'Error al mostrar correo del usuario por su rut' })
  }
})

router.get('/mostrar/publicacion', async (_req: Request, res: Response) => {
  try {
    const usuariosObtenidos = await CompradorControllers.getCompradorByPublicacionesRealizadas()
    return res.json(usuariosObtenidos)
  } catch (error) {
    console.log(error)
    return res.json({ msg: 'Error al mostrar a los usuarios que an realizado una publicacion' })
  }
})



router.put('/actualizar/contrasena', async (req: Request, res: Response) => {
  try {
    const record = CompradorControllers.updateContrasenaComprador({ ...req.body })

    return res.json({ record, recordRecordmsg: 'Contraseña del usuario actualizada correctamente' })
  } catch (error) {
    console.log(error)
    return res.json({ msg: 'Error al actualizar al nuevo usuario' })
  }
})

router.put('/actualizar/direccion', async (req: Request, res: Response) => {
  try {
    const record = CompradorControllers.updateDireccionComprador({ ...req.body })

    return res.json({ record, recordRecordmsg: 'Direccion del usuario actualizada correctamente' })
  } catch (error) {
    console.log(error)
    return res.json({ msg: 'Error al actualizar al usuario' })
  }
})

router.delete('/eliminar', async (req: Request, res: Response) => {
  try {
    const record = CompradorControllers.deleteComprador({ ...req.body })

    return res.json({ record, recordRecordmsg: 'Comprador eliminado correctamente' })
  } catch (error) {
    console.log(error)
    return res.json({ msg: 'Error al eliminar al usuario' })
  }
})
*/