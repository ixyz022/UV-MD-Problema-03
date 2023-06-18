import express, { Request, Response } from 'express'
import * as publicacionController from '../controllers/publicacionControllers/publicacionController';
import db from '../models'

const router = express.Router()

/*
router.get('/read', async (_req: Request, res: Response) => {
  try {
    const publicaciones = await publicacionController.getPublicaciones()
    return res.json(publicaciones)
  } catch (error) {
    return res.json({ msg: 'Error al mostrar las publicaciones', error })
  }
})
*/

router.get('/mostrar', async (_req: Request, res: Response) => {
  try {
    const publicaciones = await publicacionController.getPublicacionWithoutRutUsuario()
    return res.json(publicaciones)
  } catch (error) {
    return res.json({ msg: 'Error al mostrar las publicaciones', error })
  }
})


router.get("/mostrar/estado", async (req: Request, res: Response) => {
  try {
    const publicacionEstado = await publicacionController.getPublicacionByEstado({ ...req.body })
    return res.json(publicacionEstado)
  } catch (error) {
    console.log(error)
    return res.json({msg: 'Error al mostrar publicaciones por estado'})
  }
})

router.get('/mostrar/tipo', async (req: Request, res: Response) => {
  try {
    const publicacionByTipoProducto = await publicacionController.getAllpublicacionByTipoProducto({ ...req.body })
    return res.json(publicacionByTipoProducto)
  } catch (error) {
    console.log(error)
    return res.json({ msg: 'Error al mostrar los productos por un mercado' })
  }
})

router.post('/crear', async (req: Request, res: Response) => {
  try {
    if (!await publicacionController.VerifUserXProducto({ ...req.body })) {
      throw new Error('Error dentro de los parametros de rut o  identificador de producto')
    }

    const newPublicacionEntry = publicacionController.postPublicacion({ ...req.body })

    const record = db.Publicacion.create(newPublicacionEntry)

    return res.json({record, msg: 'Ingreso de publicacion correcto' })
  } catch (error) {
    console.log(error)
    return res.json({ msg: 'Error al crear una nueva publicacion' })
  }
})

router.delete('/eliminar', async (req: Request, res: Response) => {
  try {
    const record = publicacionController.deletePublicacion({ ...req.body })

    return res.json({ record, recordRecordmsg: 'Publicacion eliminado correctamente' })
  } catch (error) {
    console.log(error)
    return res.json({ msg: 'Error al eliminar al Publicacion' })
  }
})

export default router