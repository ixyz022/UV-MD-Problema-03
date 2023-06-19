"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isString = exports.parseNombreComprador = void 0;
const parseNombreComprador = (NombreCompradorFromRequest) => {
    if (!(0, exports.isString)(NombreCompradorFromRequest)) {
        throw new Error('Error en el nombre del comprador');
    }
    return NombreCompradorFromRequest;
};
exports.parseNombreComprador = parseNombreComprador;
const isString = (string) => {
    return typeof string === 'string';
};
exports.isString = isString;
