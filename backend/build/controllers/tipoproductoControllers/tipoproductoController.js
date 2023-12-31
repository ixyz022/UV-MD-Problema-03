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
exports.updateTipoProducto = exports.deleteTipoproducto = exports.postTipoproducto = exports.getTipoproducto = void 0;
const models_1 = __importDefault(require("../../models"));
const v = __importStar(require("./verifTipoproducto"));
const Tipoproducto = models_1.default.Tipoproducto;
const getTipoproducto = () => __awaiter(void 0, void 0, void 0, function* () {
    const tipoproductos = yield Tipoproducto.findAll({ where: {} });
    return tipoproductos;
});
exports.getTipoproducto = getTipoproducto;
const postTipoproducto = (object) => {
    const newEntry = {
        idTipoProducto: 0,
        descripcionProducto: v.parseDescripcionProducto(object.descripcionProducto),
    };
    return newEntry;
};
exports.postTipoproducto = postTipoproducto;
const deleteTipoproducto = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tipoProducto = yield Tipoproducto.findByPk(id);
        if (!tipoProducto) {
            throw new Error('El tipoProducto con el ID especificado no existe');
        }
        yield tipoProducto.destroy();
    }
    catch (error) {
        throw new Error('Error al eliminar al tipoProducto: ' + error.message);
    }
});
exports.deleteTipoproducto = deleteTipoproducto;
const updateTipoProducto = (idTipoProducto, nuevaDescripcion) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tipoProducto = yield Tipoproducto.findByPk(idTipoProducto);
        if (!tipoProducto) {
            throw new Error('El tipo de producto con el ID especificado no existe');
        }
        const descripcionProducto = v.parseDescripcionProducto(nuevaDescripcion);
        yield tipoProducto.update({ descripcionProducto });
    }
    catch (error) {
        throw new Error('Error al actualizar el tipo de producto: ' + error.message);
    }
});
exports.updateTipoProducto = updateTipoProducto;
