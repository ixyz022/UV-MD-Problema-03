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
const compradorControllers = __importStar(require("../controllers/compradorControllers/compradorController"));
const models_1 = __importDefault(require("../models"));
const router = express_1.default.Router();
// ¿Puedo hacer que estas peticiones se realizen unicamente para un usuario logeado?
router.get('/mostrar', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield compradorControllers.getComprador();
        return res.json(usuarios);
    }
    catch (error) {
        return res.json({ msg: 'Error al mostrar los compradores' + error.message });
    }
}));
router.post('/crear', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newCompradorEntry = compradorControllers.postComprador(Object.assign({}, req.body));
        const record = models_1.default.Comprador.create(newCompradorEntry);
        return res.json({ record, msg: 'Comprador subido correctamente' });
    }
    catch (error) {
        return res.json({ msg: 'Error al subir al comprador' + error.message });
    }
}));
router.delete('/eliminar/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        yield compradorControllers.deleteComprador(id);
        return res.json({ msg: 'Comprador eliminado correctamente' });
    }
    catch (error) {
        return res.json({ msg: 'Error al eliminar al comprador' + error.message });
    }
}));
router.put('/actualizar/:idComprador', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idComprador = parseInt(req.params.idComprador);
        const nuevoNombreComprador = req.body.nombreComprador;
        yield compradorControllers.updateComprador(idComprador, nuevoNombreComprador);
        return res.json({ msg: 'Comprador actualizado correctamente' });
    }
    catch (error) {
        return res.json({ msg: 'Error al actualizar el tipo de producto: ' + error.message });
    }
}));
exports.default = router;
/*
router.get('/mostrar/correo', async (req: Request, res: Response) => {
  try {
    const usuarios = await compradorControllers.getCorreoComprador({... req.body})
    return res.json(usuarios)
  } catch (error) {
    console.log(error)
    return res.json({ msg: 'Error al mostrar correo del usuario por su rut'})
  }
})

router.get('/mostrar/admin', async (req: Request, res: Response) => {
  try {
    const usuarios = await compradorControllers.getCompradorGestionados({... req.body})
    return res.json(usuarios)
  } catch (error) {
    console.log(error)
    return res.json({ msg: 'Error al mostrar correo del usuario por su rut' })
  }
})

router.get('/mostrar/publicacion', async (_req: Request, res: Response) => {
  try {
    const usuariosObtenidos = await compradorControllers.getCompradorByPublicacionesRealizadas()
    return res.json(usuariosObtenidos)
  } catch (error) {
    console.log(error)
    return res.json({ msg: 'Error al mostrar a los usuarios que an realizado una publicacion' })
  }
})



router.put('/actualizar/contrasena', async (req: Request, res: Response) => {
  try {
    const record = compradorControllers.updateContrasenaComprador({ ...req.body })

    return res.json({ record, recordRecordmsg: 'Contraseña del usuario actualizada correctamente' })
  } catch (error) {
    console.log(error)
    return res.json({ msg: 'Error al actualizar al nuevo usuario' })
  }
})

router.put('/actualizar/direccion', async (req: Request, res: Response) => {
  try {
    const record = compradorControllers.updateDireccionComprador({ ...req.body })

    return res.json({ record, recordRecordmsg: 'Direccion del usuario actualizada correctamente' })
  } catch (error) {
    console.log(error)
    return res.json({ msg: 'Error al actualizar al usuario' })
  }
})

router.delete('/eliminar', async (req: Request, res: Response) => {
  try {
    const record = compradorControllers.deleteComprador({ ...req.body })

    return res.json({ record, recordRecordmsg: 'Comprador eliminado correctamente' })
  } catch (error) {
    console.log(error)
    return res.json({ msg: 'Error al eliminar al usuario' })
  }
})
*/ 
