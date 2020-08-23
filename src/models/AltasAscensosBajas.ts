import { Schema, model, Document } from "mongoose";

const schema = new Schema({
  fecha: Date,
  cargo: String,
  observaciones: String,
  expediente: String,
  prestaservicioen: String,
  persona: { type: Schema.Types.ObjectId, ref: "Persona" },
});

interface IAltasAscensosBajas extends Document {
  presentadaFecha: String;
  garantia: String;
  observaciones: String;
}

export default model<IAltasAscensosBajas>("AltasAscensosBajas", schema);
