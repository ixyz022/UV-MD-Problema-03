import express, { Request, Response } from 'express'
import * as administradorController from '../controllers/administradorControllers/administradorController';
import db from '../models'

const router = express.Router()

router.get('/mostrar', async (_req: Request, res: Response) => {
  try {
    const administradores = await administradorController.getAdministradores()
    return res.json(administradores)
  } catch (error) {
    console.log(error)
    return res.json({ msg: 'Error al mostrar a los administradores' })
  }
})

router.get('/mostrar/gestion', async (_req: Request, res: Response) => {
  try {
    const administradoresObtenidos = await administradorController.getAdministradoressByGestionesRealizadas()
    return res.json(administradoresObtenidos)
  } catch (error) {
    console.log(error)
    return res.json({ msg: 'Error al mostrar a los administradores que an realizado una gestion' })
  }
})

router.post('/crear', async (req: Request, res: Response) => {
  try {
    const newAdministradorEntry = administradorController.postAdministrador({ ...req.body })

    const record = db.Administrador.create(newAdministradorEntry)

    return res.json({ record, msg: 'administradores subidos correctamente' })
  } catch (error) {
    console.log(error)
    return res.json({msg: 'Error al subir al nuevo administrador' })
  }
})

export default router