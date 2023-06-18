import express, { Request, Response } from 'express'
import * as seccionController from '../controllers/seccionControllers/seccionController';
import db from '../models'

const router = express.Router()

router.get('/mostrar', async (_req: Request, res: Response) => {
  try {
    const secciones = await seccionController.getSecciones()
    return res.json(secciones)
  } catch (error) {
    return res.json({ msg: 'Error al mostrar las secciones' })
  }
})

router.post('/crear', async (req: Request, res: Response) => {
  try {
    if (!await seccionController.VerifNewSeccion({ ...req.body })) {
      throw new Error('Error dentro de los parametros de identificacion')
    }

    const newSeccionEntry = seccionController.postSeccion({ ...req.body })

    const record = db.Seccion.create(newSeccionEntry)

    return res.json({record, msg: 'Ingreso de seccion correcto' })
  } catch (error) {
    console.log(error)
    return res.json({ msg: 'Error al crear una nueva seccion' })
  }
})

export default router