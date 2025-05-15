const express = require("express");
const router = express.Router();
const cursosController = require("../controllers/directivosController.js");

router.get("/", cursosController.consultar);

router.post("/", cursosController.ingresar);

router
  .route("/:id")
  .get(cursosController.consultarDetalle)
  .put(cursosController.actualizarDetalle)
  .delete(cursosController.eliminar);

module.exports = router;
