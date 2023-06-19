import express, { Request, Response } from 'express'
import * as productoController from '../controllers/productoControllers/productoController';
import db from '../models'

const router = express.Router()

router.get('/mostrar', async (_req: Request, res: Response) => {
  try {
    const productos = await productoController.getProductos()
    return res.json(productos)
  } catch (error: any) {
    return res.json({ msg: 'Error al mostrar los productos' + error.message})
  }
})


router.post('/crear', async (req: Request, res: Response) => {
  try {
    const newProductosEntry = await productoController.postProducto({ ...req.body }); // Agregar await aquí

    const record = await db.Producto.create(newProductosEntry); // Agregar await aquí

    return res.json({ record, msg: 'Producto subido correctamente' });
  } catch (error: any) {
    console.log(error);
    return res.json({ msg: 'Error al subir un producto' + error.message});
  }
});

router.delete('/eliminar/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    
    await productoController.deleteProducto(id);
    
    return res.json({ msg: 'Producto eliminado correctamente' });
  } catch (error: any) {
    return res.json({ msg: 'Error al eliminar al producto'+ error.message});
  }
});

export default router