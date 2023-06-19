import express from 'express';
import cors from 'cors';
import db from './models';

// Importación de las rutas
import tipoproductoRouter from './routes/tipoproducto.routes';
import compradorRouter from './routes/comprador.routes';
import productoRouter from './routes/producto.routes';
import vendedorRouter from './routes/vendedor.routes';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json()); // middleware que transforma el req.body a JSON

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Se escucha en el puerto ${PORT}`);
  });
});

app.get('/', (_req, res) => {
  res.json({ message: 'FELICIDADES LOGRASTE SER FELIZ' });
});

// Rutas
app.use('/producto', productoRouter);
app.use('/vendedor', vendedorRouter);
app.use('/comprador', compradorRouter);
app.use('/tipoproducto', tipoproductoRouter);

export default app;
