import express, { Request, Response } from 'express'
import * as tipoproductoController from "../controllers/tipoproductoControllers/tipoproductoController"
import db from '../models'

const router = express.Router()

router.get('/mostrar', async (_req: Request, res: Response) => {
  try {
    const tipoproductos = await tipoproductoController.getTipoproducto()
    return res.json(tipoproductos)
  } catch (error) {
    return res.json({ msg: 'Error al mostrar los tipos de los productos', error })
  }
})

router.post('/crear', async (req: Request, res: Response) => {
  try {
    const newTipoproductoEntry = tipoproductoController.postTipoproducto({ ...req.body })

    const record = db.Tipoproducto.create(newTipoproductoEntry)

    return res.json({record, msg: 'Subida de tipo exitosa' })
  } catch (error) {
    console.log(error)
    return res.json({ msg: 'Error al subir el nuevo tipo' })
  }
})



export default router

/*

router.get("/mostrar/estado", async (req: Request, res: Response) => {
  try {
    const publicacionEstado = await tipoproductoController.getTipoproductoByEstado({ ...req.body })
    return res.json(publicacionEstado)
  } catch (error) {
    console.log(error)
    return res.json({msg: 'Error al mostrar tipoproductos por estado'})
  }
})

router.get('/mostrar/tipo', async (req: Request, res: Response) => {
  try {
    const publicacionByTipoProducto = await tipoproductoController.getAllpublicacionByTipoProducto({ ...req.body })
    return res.json(publicacionByTipoProducto)
  } catch (error) {
    console.log(error)
    return res.json({ msg: 'Error al mostrar los productos por un mercado' })
  }
})

router.delete('/eliminar', async (req: Request, res: Response) => {
  try {
    const record = tipoproductoController.deleteTipoproducto({ ...req.body })

    return res.json({ record, recordRecordmsg: 'Tipoproducto eliminado correctamente' })
  } catch (error) {
    console.log(error)
    return res.json({ msg: 'Error al eliminar al Tipoproducto' })
  }
})
*/