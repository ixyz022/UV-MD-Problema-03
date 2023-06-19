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
exports.deleteComprador = exports.postComprador = exports.getComprador = void 0;
const models_1 = __importDefault(require("../../models"));
const v = __importStar(require("./verifComprador"));
const Comprador = models_1.default.Comprador;
const getComprador = () => __awaiter(void 0, void 0, void 0, function* () {
    const compradores = yield Comprador.findAll({ where: {} });
    return compradores;
});
exports.getComprador = getComprador;
const postComprador = (object) => {
    const newEntry = {
        idComprador: 0,
        nombreComprador: v.parseNombreComprador(object.nombreComprador),
    };
    return newEntry;
};
exports.postComprador = postComprador;
const deleteComprador = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comprador = yield Comprador.findByPk(id);
        if (!comprador) {
            throw new Error('El comprador con el ID especificado no existe');
        }
        yield comprador.destroy();
    }
    catch (error) {
        return Promise.reject(new Error('Error al eliminar al comprador'));
    }
});
exports.deleteComprador = deleteComprador;
