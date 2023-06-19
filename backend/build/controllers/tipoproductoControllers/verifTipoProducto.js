"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isString = exports.parseDescripcionProducto = void 0;
const parseDescripcionProducto = (DescripcionProductoFromRequest) => {
    if (!(0, exports.isString)(DescripcionProductoFromRequest)) {
        throw new Error('Eror en la descripcion producto');
    }
    return DescripcionProductoFromRequest;
};
exports.parseDescripcionProducto = parseDescripcionProducto;
const isString = (string) => {
    return typeof string === 'string';
};
exports.isString = isString;
