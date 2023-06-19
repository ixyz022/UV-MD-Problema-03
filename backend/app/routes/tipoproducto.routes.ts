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

router.delete('/eliminar/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    
    await tipoproductoController.deleteTipoproducto(id);
    
    return res.json({ msg: 'Tipoproducto eliminado correctamente' });
  } catch (error) {
    console.log(error);
    return Promise.reject(new Error('Error al eliminar al comprador'));
  }
});


export default router