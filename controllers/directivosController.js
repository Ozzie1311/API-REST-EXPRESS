const db = require("../database/connection.js");

class CursosController {
  constructor() {}

  ingresar(req, res) {
    try {
      const { nombre, descripcion, profesor_id } = req.body;
      db.query(
        `INSERT INTO oswaldo.cursos
          (id, nombre, descripcion, profesor_id)
          VALUES(NULL, ?, ?, ?);`,
        [nombre, descripcion, profesor_id],
        (err, rows) => {
          if (err) {
            res.status(400).send(err);
          }
          if (rows.affectedRows) {
            res
              .status(200)
              .json({ mensaje: "Registros ingresados éxitosamente" });
          }
        }
      );
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  consultar(req, res) {
    try {
      db.query(`SELECT * FROM oswaldo.cursos`, (err, rows) => {
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
    const { id } = req.params;
    try {
      db.query(`SELECT * FROM oswaldo.cursos WHERE id=?`, [id], (err, rows) => {
        if (err) {
          res.status(400).send(err);
        }
        res.status(200).json(rows);
      });
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  actualizarDetalle(req, res) {
    const { id } = req.params;
    try {
      const { nombre, descripcion, profesor_id } = req.body;
      db.query(
        `UPDATE oswaldo.cursos
                SET nombre=?, descripcion=?, profesor_id=?
                WHERE id=?;`,
        [nombre, descripcion, profesor_id, id],
        (err, rows) => {
          if (err) {
            res.status(500).send(err);
          }
          if (rows.affectedRows == 1) {
            res
              .status(200)
              .json({ mensaje: "Registros actualizados éxitosamente" });
          }
        }
      );
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  eliminar(req, res) {
    const { id } = req.params;
    try {
      db.query(
        `DELETE FROM oswaldo.cursos
                WHERE id=?;`,
        [id],
        (err, rows) => {
          if (err) {
            res.status(400).send(err);
          }
          if (rows.affectedRows == 1) {
            res.status(200).json({ mensaje: "Registros eliminados con éxito" });
          }
        }
      );
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
}

module.exports = new CursosController();
