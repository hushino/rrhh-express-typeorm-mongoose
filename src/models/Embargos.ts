import { Schema, model, Document } from "mongoose";

const schema = new Schema({
  fecha: Date,
  juzgado: String,
  acreedor: String,
  cantidad: String,
  expediente: String,
  fianzaODeudaPropia: String,
  origenDeLaDeuda: String,
  observaciones: String,
  levantada: String,
  persona: { type: Schema.Types.ObjectId, ref: "Persona" },
});

interface IEmbargos extends Document {
  fecha: Date;
  juzgado: String;
  acreedor: String;
  cantidad: String;
  expediente: String;
  fianzaODeudaPropia: String;
  origenDeLaDeuda: String;
  observaciones: String;
  levantada: String;
}

export default model<IEmbargos>("Embargos", schema);
