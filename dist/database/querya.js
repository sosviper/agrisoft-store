"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.querya = void 0;
var querya = {
  getAllActivities: "SELECT * FROM [bdagroincaServer].[dbo].[ACTIVIDADES]",
  getActivityById: "SELECT * FROM ACTIVIDADES WHERE id_actividad = @id_actividad",
  addNewActivity: "INSERT INTO [bdagroincaServer].[dbo].[ACTIVIDADES] (id_actividad, id_etapa, Descripcion, ubicacion_cc, ID_afectacion, Parametrodelsistema, horas, costo, Presupuesto, Nivel) VALUES (@id_actividad,@id_etapa,@descripcion,@ubicacion_cc,@id_afectacion,@parametro,@horas,@costo,@presupuesto,@nivel);",
  deleteActivity: "DELETE FROM [bdagroincaServer].[dbo].[ACTIVIDADES] WHERE id_actividad = @id_actividad",
  getTotalActivities: "SELECT COUNT(*) FROM bdagroincaServer.dbo.ACTIVIDADES",
  updateActivityById: "UPDATE [bdagroincaServer].[dbo].[ACTIVIDADES] SET Descripcion = @descripcion WHERE id_actividad = @id_actividad"
};
exports.querya = querya;