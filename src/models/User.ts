import { Schema, model, Document } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema({
  email: String,
  password: String,
});

userSchema.plugin(require("mongoose-role"), {
  roles: ["usuario", "administrador"],
  accessLevels: {
    usuario: ["usuario"],
    administrador: ["administrador"],
  },
});

interface IUser extends Document {
  email: string;
  password: string;
  role: string;
}

/* userSchema.methods.encryptPassword = async (password: any) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

userSchema.methods.comparePassword = async function (password: any) {
    return bcrypt.compare(password, this.password);
}; */

export default model<IUser>("User", userSchema);
