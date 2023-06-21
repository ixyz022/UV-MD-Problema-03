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
exports.getProductosDeCompradorPorTipo = exports.updateProducto = exports.deleteProducto = exports.postProducto = exports.getProductos = void 0;
const models_1 = __importDefault(require("../../models"));
const v = __importStar(require("./verifProducto"));
const Producto = models_1.default.Producto;
const getProductos = () => __awaiter(void 0, void 0, void 0, function* () {
    const productos = yield Producto.findAll({ where: {} });
    return productos;
});
exports.getProductos = getProductos;
const postProducto = (object) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newEntry = {
            numeroVendedor: yield v.parseNumeroVendedor(object.numeroVendedor),
            idComprador: yield v.parseIdComprador(object.idComprador),
            idTipoProducto: yield v.parseIdTipoProducto(object.idTipoProducto),
            precioCompra: yield v.parsePrecioCompra(object.precioCompra),
        };
        return newEntry;
    }
    catch (error) {
        // Manejo de errores
        throw new Error('Error al crear el producto: ' + error.message);
    }
});
exports.postProducto = postProducto;
const deleteProducto = (numeroVendedor, idComprador, idTipoProducto) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const producto = yield Producto.findOne({ where: { numeroVendedor, idComprador, idTipoProducto } });
        if (!producto) {
            throw new Error('El producto con las columnas especificadas no existe');
        }
        yield producto.destroy();
    }
    catch (error) {
        throw new Error('Error al eliminar el producto: ' + error.message);
    }
});
exports.deleteProducto = deleteProducto;
const updateProducto = (numeroVendedor, idComprador, idTipoProducto, nuevoPrecioCompra) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const producto = yield Producto.findOne({ where: { numeroVendedor, idComprador, idTipoProducto } });
        if (!producto) {
            throw new Error('El precio de la compra con el ID especificado no existe');
        }
        const precioCompra = v.parsePrecioCompra(nuevoPrecioCompra);
        yield producto.update({ precioCompra });
    }
    catch (error) {
        throw new Error('Error al actualizar el precio de la compra: ' + error.message);
    }
});
exports.updateProducto = updateProducto;
const getProductosDeCompradorPorTipo = (idComprador, idTipoProducto) => __awaiter(void 0, void 0, void 0, function* () {
    const productos = yield Producto.findAll({
        where: {
            idComprador: idComprador,
            idTipoProducto: idTipoProducto
        }
    });
    return productos;
});
exports.getProductosDeCompradorPorTipo = getProductosDeCompradorPorTipo;
