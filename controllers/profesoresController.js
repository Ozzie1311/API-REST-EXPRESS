const db = require("../database/connection.js");

class ProfesorController {
  constructor() {}

  consultar(req, res) {
    try {
      db.query(`SELECT * FROM profesores`, (err, rows) => {
        if (err) {
          res.status(400).send(err);
        }
        res.status(201).json(rows);
      });
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  consultarDetalle(req, res) {
    const { id } = req.params;
    try {
      const { dni, nombre, apellido, email, telefono, profesion, id } =
        req.body;
      db.query(`SELECT * FROM profesores WHERE id = ?`, [id], (err, rows) => {
        if (err) {
          res.status(400).send(err);
        }
        res.status(201).json(rows);
      });
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  ingresar(req, res) {
    try {
      const { id, dni, nombre, apellido, email, telefono, profesion } =
        req.body;
      db.query(
        `INSERT INTO oswaldo.profesores
              (id, dni, nombre, apellido, email, telefono, profesion)
              VALUES(NULL, ?, ?, ?, ?, ?, ?);`,
        [id, dni, nombre, apellido, email, telefono, profesion],
        (err, rows) => {
          if (err) {
            res.status(400).send(err);
          }
          res
            .status(201)
            .json({ mensaje: "Registro actualizado éxitosamente" });
        }
      );
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
  actualizarDetalle(req, res) {
    const { id } = req.params;
    try {
      const { dni, nombre, apellido, email, telefono, profesion } = req.body;
      db.query(
        `UPDATE oswaldo.profesores
              SET dni=?, nombre=?, apellido=?, email=?, telefono=?, profesion=?
              WHERE id=?;`,
        [dni, nombre, apellido, email, telefono, profesion, id],
        (err, rows) => {
          if (err) {
            res.status(400).send(err);
          }
          if (rows.affectedRows == 1) {
            res
              .status(201)
              .json({ mensaje: "Registro actualizado éxitosamente." });
          }
        }
      );
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  eliminar(req, res) {
    const { id } = req.params;
    res.json({
      msg: `Eliminando profesor con el id:${id}`,
    });
  }
}

module.exports = new ProfesorController();
