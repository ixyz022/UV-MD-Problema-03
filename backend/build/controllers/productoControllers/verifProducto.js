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
exports.isNumber = exports.parsePrecioCompra = exports.parseIdTipoProducto = exports.parseIdComprador = exports.parseNumeroVendedor = void 0;
const models_1 = __importDefault(require("../../models"));
const comprador = models_1.default.Comprador;
const tipoproducto = models_1.default.Tipoproducto;
const vendedor = models_1.default.Vendedor;
const parseNumeroVendedor = (NumeroVendedorFromRequest) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const record = yield vendedor.findByPk(NumeroVendedorFromRequest);
        if (record && !(0, exports.isNumber)(NumeroVendedorFromRequest)) {
            // El registro con el PK especificado existe en la tabla
            return NumeroVendedorFromRequest;
        }
        else {
            // El registro con el PK especificado no existe en la tabla
            throw new Error('El PK del numero vendedor, no existe');
        }
    }
    catch (error) {
        // Error al buscar en la tabla
        throw new Error('Error al buscar en la tabla de vendedores');
    }
});
exports.parseNumeroVendedor = parseNumeroVendedor;
const parseIdComprador = (IdCompradorFromRequest) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const record = yield comprador.findByPk(IdCompradorFromRequest);
        if (record && !(0, exports.isNumber)(IdCompradorFromRequest)) {
            // El registro con el PK especificado existe en la tabla
            return IdCompradorFromRequest;
        }
        else {
            // El registro con el PK especificado no existe en la tabla
            throw new Error('El PK de id del comprador, no existe');
        }
    }
    catch (error) {
        // Error al buscar en la tabla
        throw new Error('Error al buscar en la tabla compradores');
    }
});
exports.parseIdComprador = parseIdComprador;
const parseIdTipoProducto = (IdTipoProductoFromRequest) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const record = yield tipoproducto.findByPk(IdTipoProductoFromRequest);
        if (record && !(0, exports.isNumber)(IdTipoProductoFromRequest)) {
            // El registro con el PK especificado existe en la tabla
            return IdTipoProductoFromRequest;
        }
        else {
            // El registro con el PK especificado no existe en la tabla
            throw new Error('El PK de id del tipo producto, no existe');
        }
    }
    catch (error) {
        // Error al buscar en la tabla
        throw new Error('Error al buscar en la tabla tipo producto');
    }
});
exports.parseIdTipoProducto = parseIdTipoProducto;
const parsePrecioCompra = (PrecioCompraFromRequest) => {
    if (!(0, exports.isNumber)(PrecioCompraFromRequest)) {
        throw new Error('El precio de la compra no es correcto');
    }
    return PrecioCompraFromRequest;
};
exports.parsePrecioCompra = parsePrecioCompra;
const isNumber = (number) => {
    return typeof number === 'number';
};
exports.isNumber = isNumber;
