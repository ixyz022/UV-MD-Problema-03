import express, { Request, Response } from 'express'
import * as gestionController from '../controllers/gestionControllers/gestionController';
import db from '../models'

const router = express.Router()

router.get('/mostrar', async (_req: Request, res: Response) => {
    try {
        const gestiones = await gestionController.getGestiones()
        return res.json(gestiones)
    } catch (error) {
        return res.json({ msg: 'Error al mostrar las gestiones' })
    }
})

router.post('/crear', async (req: Request, res: Response) => {
    try {
        if (!await gestionController.VerifNewGestion({ ...req.body })) {
            throw new Error('Error dentro de los parametros de rut o  identificador de producto')
        }

        const newgestionEntry = gestionController.postgestion({ ...req.body })

        const record = db.Gestion.create(newgestionEntry)

        return res.json({ record, msg: 'Ingreso de gestion correcto' })
    } catch (error) {
        console.log(error)
        return res.json({ error, msg: 'Error al crear una nueva gestion' })
    }
})

export default router