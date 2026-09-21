import { Router } from "express";
import {
    listarProductos,
    crearProducto,
    editarProducto,
    eliminarProducto
} from "../controllers/productos.controller.js";

const router = Router();

router.get("/", listarProductos);
router.post("/", crearProducto);
router.put("/:id", editarProducto);
router.delete("/:id", eliminarProducto);

export default router;