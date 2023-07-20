import { getConnection, querya, sql } from "../database";

export const getActivities = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querya.getAllActivities);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewActivity = async (req, res) => {
  const { id_actividad, id_etapa, descripcion, ubicacion_cc } = req.body;
  let { costo } = req.body;
  let { id_afectacion, parametro, horas, presupuesto } = req.body;

  // validating
  if (id_actividad == null || descripcion == null || id_etapa == null || ubicacion_cc == null ) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  if (costo == null) costo = 0;
  if (id_afectacion == null) id_afectacion = null;
  if (parametro == null) parametro = 0;
  if (stock_min == null) horas = 1;
  if (presupuesto == null) presupuesto = 0;
  if (nivel == null) nivel = 1;

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("id_actividad", sql.VarChar, id_actividad)
      .input("id_etapa", sql.VarChar, id_etapa)
      .input("descripcion", sql.VarChar, descripcion)
      .input("ubicacion_cc", sql.Int, ubicacion_cc)
      .input("id_afectacion", sql.VarChar, id_afectacion)
      .input("parametro", sql.Int, parametro)
      .input("horas", sql.Int, horas)
      .input("costo", sql.Int, costo)
      .input("presupuesto", sql.Int, presupuesto)
      .input("nivel", sql.Int, nivel)
      .query(querya.addNewActivity);

    res.json({ id_actividad, descripcion, costo });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getActivityById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id_activity", req.params.id)
      .query(querya.getActivityById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteActivityById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id_activity", req.params.id)
      .query(querya.deleteActivity);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getTotalActivities = async (req, res) => {
  const pool = await getConnection();

  const result = await pool.request().query(querya.getTotalActivities);
  console.log(result);
  res.json(result.recordset[0][""]);
};

export const updateActivityById = async (req, res) => {
  const { descripcion } = req.body;

  // validating
  if (descripcion == null ) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }


  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("descripcion", sql.VarChar, descripcion)
      .input("id_actividad", req.params.id)
      .query(querya.updateActivityById);
    res.json({ descripcion });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};