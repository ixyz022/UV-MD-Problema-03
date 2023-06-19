import express, { Request, Response } from 'express'
import * as vendedorController from '../controllers/vendedorControllers/vendedorController';
import db from "../models"

const router = express.Router()

router.get('/mostrar', async (_req: Request, res: Response) => {
  try {
    const vendedores = await vendedorController.getVendedor()
    return res.json(vendedores)
  } catch (error) {
    return res.json({ msg: 'Error al mostrar los vendedores' })
  }
})

router.post('/crear', async (req: Request, res: Response) => {
  try {

    const newVendedorEntry = vendedorController.postVendedor({ ...req.body })

    const record = db.Vendedor.create(newVendedorEntry)

    return res.json({record, msg: 'Subida de vendedor exitosa' })
  } catch (error) {
    console.log(error)
    return res.json({ msg: 'Error al subir un vendedor' })
  }
})

export default router