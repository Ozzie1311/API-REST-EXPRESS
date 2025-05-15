const express = require("express");
const router = express.Router();
const estudianteController = require("../controllers/estudiantesController.js");

router.get("/", estudianteController.consultar);

router.post("/", estudianteController.ingresar);

router
  .route("/:id")
  .get(estudianteController.consultarDetalle)
  .put(estudianteController.actualizarDetalle)
  .delete(estudianteController.eliminar);

module.exports = router;
