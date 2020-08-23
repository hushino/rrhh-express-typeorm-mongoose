import { Schema, model, Document } from "mongoose";

const schema = new Schema(
  {
    nombre: String,
    apellido: String,
    cuil: String,
    dni: String,
    legajo: String,
    fechaDeNacimiento: String,
    apodo: String,
    foto: String,
    soltero: String,
    casado: String,
    conviviente: String,
    viudo: String,
    domicilio: String,
    lugar: String,
    calle: String,
    numero: String,
    telefonoFijo: String,
    numeroDeCelular: String,
    oficioprofecion: String,
    niveldeestudios: String,
    grupoSanguineo: String,
    factor: String,
    donante: String,
    diabetes: String,
    hipertension: String,
    alergias: String,
    asma: String,
    otros: String,
    fechadeingreso: String,
    instrumentolegal: String,
    categoria: String,
    item: String,
    planta: String,
    area: String,
    direccion: String,
    annos: String,
    meses: String,
    dias: String,
    realizoComputoDeServicios: String,
    poseeConocimientoEnMaquinasViales: String,
    casoemergenciacelular: String,
    casoemergenciafijo: String,
    casoemergencianombre: String,
    casoemergenciacelular2: String,
    casoemergenciafijo2: String,
    casoemergencianombre2: String,
    familiaracargonombre: String,
    familiaracargonombre2: String,
    familiaracargonombre3: String,
    familiaracargonombre4: String,
    familiaracargonombre5: String,
    familiaracargodni: Number,
    familiaracargodni2: Number,
    familiaracargodni3: Number,
    familiaracargodni4: Number,
    familiaracargodni5: Number,
    familiaracargoedad: String,
    familiaracargoedad2: String,
    familiaracargoedad3: String,
    familiaracargoedad4: String,
    familiaracargoedad5: String,
    altura: String,
    barrio: String,
    estudiosincompletos: String,
    conyugeapellido: String,
    conyugenombre: String,
    conyugedni: Number,
    conyugecuil: Number,

    grupofamiliarNombre: String,
    grupofamiliarNombre2: String,
    grupofamiliarNombre3: String,
    grupofamiliarNombre4: String,
    grupofamiliarNombre5: String,
    grupofamiliarNombre6: String,
    grupofamiliarNombre7: String,
    grupofamiliarNombre8: String,
    grupofamiliarNombre9: String,
    grupofamiliarNombre10: String,
    grupofamiliarNombre11: String,

    grupofamiliarApellido: String,
    grupofamiliarApellido2: String,
    grupofamiliarApellido3: String,
    grupofamiliarApellido4: String,
    grupofamiliarApellido5: String,
    grupofamiliarApellido6: String,
    grupofamiliarApellido7: String,
    grupofamiliarApellido8: String,
    grupofamiliarApellido9: String,
    grupofamiliarApellido10: String,
    grupofamiliarApellido11: String,

    grupofamiliarEdad: String,
    grupofamiliarEdad2: String,
    grupofamiliarEdad3: String,
    grupofamiliarEdad4: String,
    grupofamiliarEdad5: String,
    grupofamiliarEdad6: String,
    grupofamiliarEdad7: String,
    grupofamiliarEdad8: String,
    grupofamiliarEdad9: String,
    grupofamiliarEdad10: String,
    grupofamiliarEdad11: String,

    grupofamiliarDni: Number,
    grupofamiliarDni2: Number,
    grupofamiliarDni3: Number,
    grupofamiliarDni4: Number,
    grupofamiliarDni5: Number,
    grupofamiliarDni6: Number,
    grupofamiliarDni7: Number,
    grupofamiliarDni8: Number,
    grupofamiliarDni9: Number,
    grupofamiliarDni10: Number,
    grupofamiliarDni11: Number,
    licencias: [{ type: Schema.Types.ObjectId, ref: "Licencia" }],
    garantias: [{ type: Schema.Types.ObjectId, ref: "Garantia" }],
    embargos: [{ type: Schema.Types.ObjectId, ref: "Embargo" }],
    concpremios: [{ type: Schema.Types.ObjectId, ref: "Concpremio" }],
    altasAscensosBajas: [
      { type: Schema.Types.ObjectId, ref: "AltasAscensosBajas" },
    ],
    otrosServiciosPrestados: [
      { type: Schema.Types.ObjectId, ref: "OtrosServiciosPrestados" },
    ],
    penasDisciplinariasSufridas: [
      { type: Schema.Types.ObjectId, ref: "PenasDisciplinariasSufridas" },
    ],
  },
  { strict: false }
);

interface IPersona extends Document {
  licencias: any | [];
  garantias: any | [];
  embargos: any | [];
  concpremios: any | [];
  altasAscensosBajas: any | [];
  otrosServiciosPrestados: any | [];
  penasDisciplinariasSufridas: any | [];
  nombre: String;
  apellido: String;
  cuil: String;
  dni: String;
  legajo: String;
  fechaDeNacimiento: String;
  apodo: String;
  foto: String;
  soltero: String;
  casado: String;
  conviviente: String;
  viudo: String;
  domicilio: String;
  lugar: String;
  calle: String;
  numero: String;
  telefonoFijo: String;
  numeroDeCelular: String;
  oficioprofecion: String;
  niveldeestudios: String;
  grupoSanguineo: String;
  factor: String;
  donante: String;
  diabetes: String;
  hipertension: String;
  alergias: String;
  asma: String;
  otros: String;
  fechadeingreso: String;
  instrumentolegal: String;
  categoria: String;
  item: String;
  planta: String;
  area: String;
  direccion: String;
  annos: String;
  meses: String;
  dias: String;
  realizoComputoDeServicios: String;
  poseeConocimientoEnMaquinasViales: String;
  casoemergenciacelular: String;
  casoemergenciafijo: String;
  casoemergencianombre: String;
  casoemergenciacelular2: String;
  casoemergenciafijo2: String;
  casoemergencianombre2: String;
  familiaracargonombre: String;
  familiaracargonombre2: String;
  familiaracargonombre3: String;
  familiaracargonombre4: String;
  familiaracargonombre5: String;
  familiaracargodni: Number;
  familiaracargodni2: Number;
  familiaracargodni3: Number;
  familiaracargodni4: Number;
  familiaracargodni5: Number;
  familiaracargoedad: String;
  familiaracargoedad2: String;
  familiaracargoedad3: String;
  familiaracargoedad4: String;
  familiaracargoedad5: String;
  altura: String;
  barrio: String;
  estudiosincompletos: String;
  conyugeapellido: String;
  conyugenombre: String;
  conyugedni: Number;
  conyugecuil: Number;

  grupofamiliarNombre: String;
  grupofamiliarNombre2: String;
  grupofamiliarNombre3: String;
  grupofamiliarNombre4: String;
  grupofamiliarNombre5: String;
  grupofamiliarNombre6: String;
  grupofamiliarNombre7: String;
  grupofamiliarNombre8: String;
  grupofamiliarNombre9: String;
  grupofamiliarNombre10: String;
  grupofamiliarNombre11: String;

  grupofamiliarApellido: String;
  grupofamiliarApellido2: String;
  grupofamiliarApellido3: String;
  grupofamiliarApellido4: String;
  grupofamiliarApellido5: String;
  grupofamiliarApellido6: String;
  grupofamiliarApellido7: String;
  grupofamiliarApellido8: String;
  grupofamiliarApellido9: String;
  grupofamiliarApellido10: String;
  grupofamiliarApellido11: String;

  grupofamiliarEdad: String;
  grupofamiliarEdad2: String;
  grupofamiliarEdad3: String;
  grupofamiliarEdad4: String;
  grupofamiliarEdad5: String;
  grupofamiliarEdad6: String;
  grupofamiliarEdad7: String;
  grupofamiliarEdad8: String;
  grupofamiliarEdad9: String;
  grupofamiliarEdad10: String;
  grupofamiliarEdad11: String;

  grupofamiliarDni: Number;
  grupofamiliarDni2: Number;
  grupofamiliarDni3: Number;
  grupofamiliarDni4: Number;
  grupofamiliarDni5: Number;
  grupofamiliarDni6: Number;
  grupofamiliarDni7: Number;
  grupofamiliarDni8: Number;
  grupofamiliarDni9: Number;
  grupofamiliarDni10: Number;
  grupofamiliarDni11: Number;
}

export default model<IPersona>("Persona", schema);
