"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const productoController = __importStar(require("../controllers/productoControllers/productoController"));
const models_1 = __importDefault(require("../models"));
const router = express_1.default.Router();
router.get('/mostrar', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productos = yield productoController.getProductos();
        return res.json(productos);
    }
    catch (error) {
        return res.json({ msg: 'Error al mostrar los productos' + error.message });
    }
}));
router.post('/crear', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newProductosEntry = yield productoController.postProducto(Object.assign({}, req.body)); // Agregar await aquí
        const record = yield models_1.default.Producto.create(newProductosEntry); // Agregar await aquí
        return res.json({ record, msg: 'Producto subido correctamente' });
    }
    catch (error) {
        console.log(error);
        return res.json({ msg: 'Error al subir un producto' + error.message });
    }
}));
router.delete('/eliminar/:numeroVendedor/:idComprador/:idTipoProducto', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const numeroVendedor = parseInt(req.params.numeroVendedor);
        const idComprador = parseInt(req.params.idComprador);
        const idTipoProducto = parseInt(req.params.idTipoProducto);
        yield productoController.deleteProducto(numeroVendedor, idComprador, idTipoProducto);
        return res.json({ msg: 'Producto eliminado correctamente' });
    }
    catch (error) {
        return res.json({ msg: 'Error al eliminar el producto: ' + error.message });
    }
}));
router.put('/actualizar/:numeroVendedor/:idComprador/:idTipoProducto', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const numeroVendedor = parseInt(req.params.numeroVendedor);
        const idComprador = parseInt(req.params.idComprador);
        const idTipoProducto = parseInt(req.params.idTipoProducto);
        const nuevoPrecioCompra = req.body.precioCompra;
        yield productoController.updateProducto(numeroVendedor, idComprador, idTipoProducto, nuevoPrecioCompra);
        return res.json({ msg: 'Precio de la compra actualizado correctamente' });
    }
    catch (error) {
        return res.json({ msg: 'Error al actualizar el precio de la compra: ' + error.message });
    }
}));
exports.default = router;
