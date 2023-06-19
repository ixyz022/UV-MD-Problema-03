"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const models_1 = __importDefault(require("./models"));
// Importación de las rutas
const tipoproducto_routes_1 = __importDefault(require("./routes/tipoproducto.routes"));
const comprador_routes_1 = __importDefault(require("./routes/comprador.routes"));
const producto_routes_1 = __importDefault(require("./routes/producto.routes"));
const vendedor_routes_1 = __importDefault(require("./routes/vendedor.routes"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json()); // middleware que transforma el req.body a JSON
models_1.default.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Se escucha en el puerto ${PORT}`);
    });
});
app.get('/', (_req, res) => {
    res.json({ message: 'FELICIDADES LOGRASTE SER FELIZ' });
});
// Rutas
app.use('/producto', producto_routes_1.default);
app.use('/vendedor', vendedor_routes_1.default);
app.use('/comprador', comprador_routes_1.default);
app.use('/tipoproducto', tipoproducto_routes_1.default);
exports.default = app;
