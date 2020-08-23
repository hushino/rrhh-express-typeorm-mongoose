import { Schema, model, Document } from "mongoose";

const schema = new Schema({
  fechaLicencia: String,
  referencias: String,
  numeroDeDias: String,
  observaciones: String,
  persona: { type: Schema.Types.ObjectId, ref: "Persona" },
});

interface ILicencia extends Document {
  fechaLicencia: String;
  referencias: String;
  numeroDeDias: String;
  observaciones: String;
  persona: [];
}

export default model<ILicencia>("Licencia", schema);
