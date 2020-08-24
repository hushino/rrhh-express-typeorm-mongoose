import { Router, Request, Response, NextFunction } from "express";
import {
  getHome,
  registerGet,
  register,
  login,
  logout,
} from "../controllers/user.controller";
import {
  crearPersona,
  postPersona,
  personas,
  verPersona,
} from "../controllers/persona.controller";
import {
  agregarLicencia,
  agregarLicenciaPost,
} from "../controllers/licencia.controller";

const router2 = Router();

router2.route("/").get(getHome);

router2.route("/register").get(registerGet).post(register);
router2.route("/login").get(login).post(login);
router2.route("/logout").get(logout);

router2
  .route("/personas/:page")
  .get(/* hasAccess('contribuyente'), */ personas);
router2.route("/verPersona/:id*?").get(verPersona);
router2
  .route("/crearPersona")
  .get(/* hasAccess('inspector'), */ crearPersona)
  .post(/* hasAccess('inspector'),  multer.single("image"),*/ postPersona);

router2
  .route("/agregarLicencia/:id*?")
  .get(agregarLicencia)
  .post(agregarLicenciaPost);

export default router2;
