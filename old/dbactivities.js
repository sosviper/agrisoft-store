var config = require('../dbconfig')
const sql = require('mssql')


// Funcion Asybc : Asyncrona por que devuelve un objeto
async function getActivities() {
  try {
     
    let pool = await sql.connect(config)
    let activities = await pool.request().query("SELECT * FROM ACTIVIDADES")
    return activities.recordsets

  } catch(error) {
    console.log(error);
  }
}

async function getActivityById(act_id) {
  try {
     
    let pool = await sql.connect(config)
    let activities = await pool.request()
      .input('input_parameter', sql.VarChar(6), act_id)
      .query("SELECT * FROM ACTIVIDADES WHERE id_actividad = @input_parameter")
    return activities.recordsets

  } catch(error) {
    console.log(error);
  }
}

async function insertActivity(activity) {
  try {
     
    let pool = await sql.connect(config);
    let insertActivity = await pool.request()
      .input('id_actividad', sql.VarChar(6), activity.id_actividad)
      .input('id_etapa', sql.VarChar(3), activity.id_etapa)
      .input('descripcion', sql.VarChar(250), activity.Descripcion)
      .input('ubicacion_cc', sql.Int, activity.ubicacion_cc)
      .input('id_afectacion', sql.VarChar(4), activity.ID_afectacion)
      .input('parametrodelsistema', sql.Int, activity.Parametrodelsistema)
      .input('horas', sql.Int, activity.horas)
      .input('costo', sql.Int, activity.costo)
      .input('presupuesto', sql.Int, activity.Presupuesto)
      .input('nivel', sql.Int, activity.Nivel)
      .execute("SP_I_ACTIVITY_01")
    return insertActivity.recordsets;

  } catch(error) {
    console.log(error);
  }
}

module.exports = {
  getActivities: getActivities,
  getActivityById: getActivityById,
  insertActivity: insertActivity
}