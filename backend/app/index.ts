import express from 'express'
import cors = require("cors");
import db from './models'

// Importacion de las rutas
import publicacionRouter from "./routes/publicacion.routes";
import usuarioRouter from "./routes/usuario.routes";
import productoRouter from "./routes/producto.routes";
import administradorRouter from './routes/administrador.routes'
import mercadoRouter from './routes/mercado.routes';
import seccionRouter from './routes/seccion.routes'
import gestionRouter from './routes/gestion.routes';

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json()) // middleware que transforma la req.body a un json

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Se escucha ${PORT}`)
  })
})

app.get("/", (_req, res) => {
  res.json({ message: "FELICIDADES LOGRASTE SER FELIZ" });
});

// rutas
app.use("/publicacion", publicacionRouter);
app.use("/usuario", usuarioRouter);
app.use("/producto", productoRouter);
app.use("/admin", administradorRouter)
app.use("/mercado", mercadoRouter);
app.use("/seccion", seccionRouter);
app.use("/gestion", gestionRouter)