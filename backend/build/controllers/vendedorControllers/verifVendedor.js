"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isString = exports.parseNombreVendedor = void 0;
const parseNombreVendedor = (nombreVendedorFromRequest) => {
    if (!(0, exports.isString)(nombreVendedorFromRequest)) {
        throw new Error('Error al ingresar nombre vendedor');
    }
    return nombreVendedorFromRequest;
};
exports.parseNombreVendedor = parseNombreVendedor;
const isString = (string) => {
    return typeof string === 'string';
};
exports.isString = isString;
