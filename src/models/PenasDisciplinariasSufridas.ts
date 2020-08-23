import { Schema, model, Document } from "mongoose";

const schema = new Schema({
  fecha: Date,
  expediente: String,
  referencias: String,
  persona: { type: Schema.Types.ObjectId, ref: "Persona" },
});

interface IPenasDisciplinariasSufridas extends Document {
  fecha: Date;
  expediente: String;
  referencias: String;
}

export default model<IPenasDisciplinariasSufridas>(
  "PenasDisciplinariasSufridas",
  schema
);
