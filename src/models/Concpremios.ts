import { Schema, model, Document } from "mongoose";

const schema = new Schema({
  fechaLicencia: String,
  referencias: String,
  persona: { type: Schema.Types.ObjectId, ref: "Persona" },
});

interface IConcpremios extends Document {
  fechaLicencia: String;
  referencias: String;
}

export default model<IConcpremios>("Concpremios", schema);
