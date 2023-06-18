import express, { Request, Response } from 'express'
import * as mercadoControllers from '../controllers/mercadoControllers/mercadoController';
import db from '../models'

const router = express.Router()

router.get('/mostrar', async (_req: Request, res: Response) => {
    try {
        const mercados = await mercadoControllers.getMercado()
        return res.json(mercados)
    } catch (error) {
        return res.json({ msg: 'Error al mostrar los mercados disponibles' })
    }
})

router.post('/crear', async (req: Request, res: Response) => {
    try {
        const newMercadoEntry = mercadoControllers.postMercado({ ...req.body })

        const record = db.Mercado.create(newMercadoEntry)

        return res.json({ record, msg: 'Mercado añadido correctamente' })
    } catch (error) {
        console.log(error)
        return res.json({error, msg: 'Error al momento de crear el mercado' })
    }
})

export default router