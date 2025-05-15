const express = require("express");
const cors = require("cors");
const estudiantesRoutes = require("./views/estudiantesRoutes.js");
const profesoresRoutes = require("./views/profesoresRoutes.js");
const cursosRoutes = require("./views/directivosRoutes.js");

const app = express();
app.use(express.json());

// Express Config
app.set("serverName", "Oswaldo server");
app.set("port", 3000);

app.use("/estudiantes", estudiantesRoutes);
app.use("/profesores", profesoresRoutes);
app.use("/cursos", cursosRoutes);

app.listen(app.get("port"), () => {
  console.log(
    `${app.get("serverName")} corriendo en el puerto ${app.get("port")}`
  );
});
