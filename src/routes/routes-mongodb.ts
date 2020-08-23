import { Router, Request, Response, NextFunction } from "express";
import multer from "../libs/multer";
import hasAccess from "../auth/hasAccess";
import multer2 from "../libs/multer2";
import {
  editarfromadmin,
  logout,
  borrarcuenta,
  administradorActualizar,
  postPersona,
  crearPersona,
  personas,
  admin,
  login,
  registerGet,
  register,
  getHome,
  getPhotoById,
  verPersona,
  crearLicencia,
  postLicencia,
  agregarGarantia,
  postGarantia,
} from "../controllers/mongodb.controller";

const router = Router();

router.route("/").get(getHome);
router
  .route("/register")
  .get(registerGet)
  .post(
    multer.fields([
      { name: "dni", maxCount: 1 },
      { name: "dni1", maxCount: 1 },
    ]),
    register
  );
router.route("/login").get(login).post(login);
router.route("/logout").get(logout);

router.route("/personas/:page").get(/* hasAccess('contribuyente'), */ personas);

router
  .route("/crearPersona")
  .get(/* hasAccess('inspector'), */ crearPersona)
  .post(/* hasAccess('inspector'),  multer.single("image"),*/ postPersona);

router
  .route("/agregarLicencia/:id*?")
  .get(/* hasAccess('inspector'), */ crearLicencia)
  .post(/* hasAccess('inspector'),  multer.single("image"),*/ postLicencia);

router.route("/verPersona/:id*?").get(verPersona);

router
  .route("/agregarGarantia/:id*?")
  .get(/* hasAccess('inspector'), */ agregarGarantia)
  .post(/* hasAccess('inspector'),  multer.single("image"),*/ postGarantia);

router
  .route("/administrador/:page*?")
  .get(/* hasAccess('administrador'),  */ admin)
  .post(/* hasAccess('administrador'),  cambiarestadodecuenta*/);

//router.route('/admincambiarstadodecuenta').post(/* hasAccess('administrador'),  */cambiarestadodecuenta)
//router.route('/cambiarestadocamion').post(/* hasAccess('contribuyente'), */cambiarestadocamion)
router
  .route("/administradorActualizar")
  .post(/* hasAccess('contribuyente'), */ administradorActualizar);
router
  .route("/borrarcuenta")
  .post(/* hasAccess('contribuyente'), */ borrarcuenta);

router.route("/editarfromadmin/:id*?").get(editarfromadmin);

/* router.route('/photos')
    .post(multer.single('image'), createPhoto)
    .get(getPhotos)

router.route('/photo/:id')
    .get(getPhotoById)
    .delete(deletePhoto)
    .put(updatePhoto)
 */
export default router;
