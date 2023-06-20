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
exports.updateVendedor = exports.deleteVendedor = exports.postVendedor = exports.getVendedor = void 0;
const models_1 = __importDefault(require("../../models"));
const v = __importStar(require("./verifVendedor"));
const Vendedor = models_1.default.Vendedor;
const getVendedor = () => __awaiter(void 0, void 0, void 0, function* () {
    const vendedores = yield Vendedor.findAll({ where: {} });
    return vendedores;
});
exports.getVendedor = getVendedor;
const postVendedor = (object) => {
    const newEntry = {
        numeroVendedor: 0,
        nombreVendedor: v.parseNombreVendedor(object.nombreVendedor),
    };
    return newEntry;
};
exports.postVendedor = postVendedor;
const deleteVendedor = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const vendedor = yield Vendedor.findByPk(id);
        if (!vendedor) {
            throw new Error('El vendedor con el ID especificado no existe');
        }
        yield vendedor.destroy();
    }
    catch (error) {
        throw new Error('Error al eliminar al vendedor: ' + error.message);
    }
});
exports.deleteVendedor = deleteVendedor;
const updateVendedor = (numeroVendedor, nuevoNombreVendedor) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const vendedor = yield Vendedor.findByPk(numeroVendedor);
        if (!vendedor) {
            throw new Error('El nombre del vendedor con el ID especificado no existe');
        }
        const nombreVendedor = v.parseNombreVendedor(nuevoNombreVendedor);
        yield vendedor.update({ nombreVendedor });
    }
    catch (error) {
        throw new Error('Error al actualizar el nombre del vendedor: ' + error.message);
    }
});
exports.updateVendedor = updateVendedor;
