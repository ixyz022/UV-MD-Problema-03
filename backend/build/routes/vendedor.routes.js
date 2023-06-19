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
const express_1 = __importDefault(require("express"));
const vendedorController = __importStar(require("../controllers/vendedorControllers/vendedorController"));
const models_1 = __importDefault(require("../models"));
const router = express_1.default.Router();
router.get('/mostrar', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const vendedores = yield vendedorController.getVendedor();
        return res.json(vendedores);
    }
    catch (error) {
        return res.json({ msg: 'Error al mostrar los vendedores' });
    }
}));
router.post('/crear', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newVendedorEntry = vendedorController.postVendedor(Object.assign({}, req.body));
        const record = models_1.default.Vendedor.create(newVendedorEntry);
        return res.json({ record, msg: 'Subida de vendedor exitosa' });
    }
    catch (error) {
        console.log(error);
        return res.json({ msg: 'Error al subir un vendedor' });
    }
}));
exports.default = router;
