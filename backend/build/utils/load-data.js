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
const fs_1 = __importDefault(require("fs"));
const util_1 = require("util");
const models_1 = __importDefault(require("../models")); // Importa las funciones para obtener los modelos
const readFileAsync = (0, util_1.promisify)(fs_1.default.readFile);
function cargarDatos() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Lee el archivo JSON
            const data = yield readFileAsync('./seeders/seed-data', 'utf8');
            const jsonData = JSON.parse(data);
            // Obtiene los modelos de los archivos models.ts
            const Comprador = models_1.default.Comprador;
            const Producto = models_1.default.Producto;
            const TipoProducto = models_1.default.Tipoproducto;
            const Vendedor = models_1.default.Vendedor;
            // Crea los registros en la base de datos
            yield Comprador.bulkCreate(jsonData.Comprador);
            yield Producto.bulkCreate(jsonData.Producto);
            yield TipoProducto.bulkCreate(jsonData.TipoProducto);
            yield Vendedor.bulkCreate(jsonData.Vendedor);
            console.log('Datos cargados correctamente.');
        }
        catch (error) {
            console.error('Error al cargar los datos:', error);
        }
    });
}
cargarDatos();
exports.default = cargarDatos;
