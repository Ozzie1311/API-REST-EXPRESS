const db = require("../database/connection.js");

class EstudianteController {
  constructor() {}

  consultar(req, res) {
    try {
      db.query(`SELECT * FROM oswaldo.estudiantes;`, (err, rows) => {
        if (err) {
          res.status(400).send(err);
        }
        res.status(200).json(rows);
      });
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  consultarDetalle(req, res) {
    try {
      const { id } = req.params;
      db.query(`SELECT * FROM estudiantes WHERE id = ?`, [id], (err, rows) => {
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
      const { dni, nombre, apellido, email, telefono } = req.body;
      db.query(
        `INSERT INTO oswaldo.estudiantes
          (id, dni, nombre, apellido, email, telefono)
          VALUES(NULL, ?, ?, ?, ?, ?);`,
        [dni, nombre, apellido, email, telefono],
        (err, rows) => {
          if (err) {
            res.status(500).send(err);
          }
          res.status(201).json({ id: rows.insertId });
        }
      );
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
  actualizarDetalle(req, res) {
    const { id } = req.params;
    try {
      const { dni, nombre, apellido, email, telefono } = req.body;
      db.query(
        `UPDATE oswaldo.estudiantes
          SET dni=?, nombre=?, apellido=?, email=?, telefono=?
          WHERE id = ?;`,
        [dni, nombre, apellido, email, telefono, id],
        (err, rows) => {
          if (err) {
            res.status(400).send(err);
          }
          if (rows.affectedRows == 1) {
            res.status(200).json({
              mensaje: "Registro actualizado con éxito",
            });
          }
        }
      );
    } catch (err) {
      req.status(500).send(err.message);
    }
  }

  eliminar(req, res) {
    const { id } = req.params;
    try {
      db.query(
        `DELETE FROM oswaldo.estudiantes
          WHERE id=?;`,
        [id],
        (err, rows) => {
          if (err) {
            res.status(400).send(err);
          }
          if (rows.affectedRows == 1) {
            res.status(201).json({ mensaje: "Registro actualizado con éxito" });
          }
        }
      );
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
}

module.exports = new EstudianteController();
