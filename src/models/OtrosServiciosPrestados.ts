import { Schema, model, Document } from "mongoose";

const schema = new Schema({
  fecha: Date,
  referencias: String,
  persona: { type: Schema.Types.ObjectId, ref: "Persona" },
});

interface IOtrosServiciosPrestados extends Document {
  fecha: Date;
  referencias: String;
}

export default model<IOtrosServiciosPrestados>(
  "OtrosServiciosPrestados",
  schema
);
