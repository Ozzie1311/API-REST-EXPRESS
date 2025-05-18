const express = require("express");
const router = express.Router();
const cursosController = require("../controllers/cursosController.js");

router.get("/", cursosController.consultar);

router.post("/", cursosController.ingresar);
router.post("/registrarEstudiante", cursosController.asociarEstudiante);

router
  .route("/:id")
  .get(cursosController.consultarDetalle)
  .put(cursosController.actualizarDetalle)
  .delete(cursosController.eliminar);

module.exports = router;
