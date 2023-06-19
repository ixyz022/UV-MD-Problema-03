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
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    up: (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.bulkInsert('comprador', [
            { idComprador: 1, nombreComprador: 'Dwayne Johnson' },
            { idComprador: 2, nombreComprador: 'Under Taker' },
        ], {});
        yield queryInterface.bulkInsert('Producto', [
            { numeroVendedor: 1, idComprador: 1, idTipoProducto: 1, precioCompra: 1000 },
            { numeroVendedor: 2, idComprador: 2, idTipoProducto: 2, precioCompra: 2000 },
        ], {});
        yield queryInterface.bulkInsert('TipoProducto', [
            { idTipoProducto: 1, descripcionProducto: 'Cinturón campeonato Lucha Violenta' },
            { idTipoProducto: 2, descripcionProducto: 'Silla plegable' },
        ], {});
        yield queryInterface.bulkInsert('vendedor', [
            { numeroVendedor: 1, nombreVendedor: 'Cactus Jack' },
            { numeroVendedor: 2, nombreVendedor: 'Stone Cold Steve Austin' },
        ], {});
    }),
};
