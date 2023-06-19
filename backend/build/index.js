"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const models_1 = __importDefault(require("./models"));
const load_data_1 = __importDefault(require("./utils/load-data")); // Importa la función cargarDatos
// Importación de las rutas
const tipoproducto_routes_1 = __importDefault(require("./routes/tipoproducto.routes"));
const comprador_routes_1 = __importDefault(require("./routes/comprador.routes"));
const producto_routes_1 = __importDefault(require("./routes/producto.routes"));
const vendedor_routes_1 = __importDefault(require("./routes/vendedor.routes"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json()); // middleware que transforma el req.body a JSON
models_1.default.sequelize.sync({ force: true })
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    // Carga los datos del JSON en la base de datos
    yield (0, load_data_1.default)();
    // Inicia el servidor de Express
    app.listen(PORT, () => {
        console.log(`Se escucha en el puerto ${PORT}`);
    });
}))
    .catch((err) => console.error('Error al sincronizar la base de datos:', err));
app.get('/', (_req, res) => {
    res.json({ message: 'FELICIDADES LOGRASTE SER FELIZ' });
});
// Rutas
app.use('/producto', producto_routes_1.default);
app.use('/vendedor', vendedor_routes_1.default);
app.use('/comprador', comprador_routes_1.default);
app.use('/tipoproducto', tipoproducto_routes_1.default);
exports.default = app;
