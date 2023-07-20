class Activity {
  constructor(id_actividad, id_etapa, descripcion, ubicacion_cc, id_afectacion, Parametrodelsistema, horas, costo, presupuesto, nivel) {
    this.id_actividad = id_actividad;
    this.id_etapa = id_etapa;
    this.Descripcion = descripcion;
    this.ubicacion_cc = ubicacion_cc;
    this.ID_afectacion = id_afectacion;
    this.Parametrodelsistema = Parametrodelsistema;
    this.horas = horas;
    this.costo = costo;
    this.Presupuesto = presupuesto;
    this.Nivel = nivel;
  }
}

module.exports = Activity