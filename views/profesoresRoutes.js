const express = require("express");
const router = express.Router();
const profesorController = require("../controllers/profesoresController.js");

router.get("/", profesorController.consultar);

router.post("/", profesorController.ingresar);

router
  .route("/:id")
  .get(profesorController.consultarDetalle)
  .put(profesorController.actualizarDetalle)
  .delete(profesorController.eliminar);

module.exports = router;
