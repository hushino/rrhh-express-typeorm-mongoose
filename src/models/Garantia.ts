import { Schema, model, Document } from "mongoose";

const schema = new Schema({
  presentadaFecha: Date,
  garantia: String,
  observaciones: String,
  persona: { type: Schema.Types.ObjectId, ref: "Persona" },
});

interface IGarantia extends Document {
  presentadaFecha: Date;
  garantia: String;
  observaciones: String;
}

export default model<IGarantia>("Garantia", schema);
