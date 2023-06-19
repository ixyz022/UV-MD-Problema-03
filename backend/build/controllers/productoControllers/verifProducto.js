"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = exports.parsePrecioCompra = exports.parseIdTipoProducto = exports.parseIdComprador = exports.parseNumeroVendedor = void 0;
const parseNumeroVendedor = (NumeroVendedorFromRequest) => {
    if (!(0, exports.isNumber)(NumeroVendedorFromRequest)) {
        throw new Error('El numero del vendedor no concuerda con uno existente');
    }
    return NumeroVendedorFromRequest;
};
exports.parseNumeroVendedor = parseNumeroVendedor;
const parseIdComprador = (IdCompradorFromRequest) => {
    if (!(0, exports.isNumber)(IdCompradorFromRequest)) {
        throw new Error('El id del producto no concuerda con uno existente');
    }
    return IdCompradorFromRequest;
};
exports.parseIdComprador = parseIdComprador;
const parseIdTipoProducto = (IdTipoProductoFromRequest) => {
    if (!(0, exports.isNumber)(IdTipoProductoFromRequest)) {
        throw new Error('El id del tipo del producto no concuerda con uno existente');
    }
    return IdTipoProductoFromRequest;
};
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
