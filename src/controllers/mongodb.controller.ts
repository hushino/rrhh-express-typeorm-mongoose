import { Request, Response } from "express";
import Persona from "../models/Persona";
import User from "../models/User";
import fs from "fs-extra";
import path from "path";
import sharp from "sharp";
import Licencia from "../models/Licencia";
import Garantia from "../models/Garantia";

export async function getHome(req: Request, res: Response) {
  res.render("index", { title: "Control de camiones" });
}
export async function borrarcuenta(req: Request, res: Response) {
  let { borrarid } = req.body;
  //console.log(borrarid)
  await User.findByIdAndDelete(borrarid);
  res.render("administrador");
}

export async function editarfromadmin(req: Request, res: Response) {
  const { id } = req.params;
  const ids = await User.findById(id);
  res.render("editarfromadmin", { admincuenta: ids });
}
export async function personas(req: Request, res: Response, next: any) {
  let perPage: number = 4;
  let page: any = req.params.page || 1;
  //let cuit = req.session.cuit;
  //console.log('CUIT '+cuit)
  try {
    await Persona.find(/* { cuit: cuit } */)
      .sort({ createdAt: -1 })
      .skip(perPage * page - perPage)
      .limit(perPage)
      .lean()
      .exec(function (err: any, persona) {
        Persona.estimatedDocumentCount().exec(function (err: any, count: any) {
          if (err) return next(err);
          res.render("personas", {
            serie: persona,
            current: page,
            pages: Math.ceil(count / perPage),
          });
        });
      });
    // console.log(camion)
  } catch (err) {
    next(err);
  }
  //res.render('contribuyente', { title: 'Express' })
}
export async function crearPersona(req: Request, res: Response) {
  res.render("crearPersona", { title: "Crear Persona" });
}

export async function postPersona(req: Request, res: Response) {
  const persona = new Persona(req.body);
  await persona.save();
  return res.render("personas");
}

export async function verPersona(req: Request, res: Response) {
  const { id } = req.params;
  const ids = await Persona.findById(id);
  res.render("verPersona", { persona: ids });
}

export async function admin(req: Request, res: Response, next: any) {
  let perPage: number = 4;
  let page: any = req.params.page || 1;
  try {
    /*   const user =  */ await User.find({})
      .sort({ createdAt: -1 })
      .skip(perPage * page - perPage)
      .limit(perPage)
      .lean()
      .exec(function (err: any, user) {
        User.estimatedDocumentCount().exec(function (err: any, count: any) {
          if (err) return next(err);
          res.render("administrador", {
            admincuenta: user,
            current: page,
            pages: Math.ceil(count / perPage),
          });
          //console.log(user)
        });
      });
  } catch (err) {
    next(err);
  }
  // const contribuyentes = await User.find({})
  //console.log(userr)
  //res.render('administrador', { contri:contribuyentes })
}

export async function logout(req: Request, res: Response) {
  res.clearCookie("connect.sid");
  res.redirect("/");
}

export async function login(req: Request, res: Response) {
  let { email, password } = req.body;
  let checkifuserexist = await User.findOne({
    email: email,
    password: password,
  });
  //console.log(checkifuserexist+ ' checkifuserexist')
  if (checkifuserexist) {
    let { role } = checkifuserexist;
    //console.log(req.session)
    req.session.role = role;
    //console.log('cuit2 ' + cuit+ ' extra '+ checkifuserexist)
    //req.session.cuit = cuit;
    // console.log(req.session.role + ' role ' + role)
    if (role === "usuario") {
      res.redirect("personas/1");
    }
    res.redirect("personas/1");
    //res.render('index', { /* isAuthenticated: true, */title: "login correcto" })
  } else {
    req.session.role = "";
    res.render("login", {
      title: "registro noc registro",
      registerexito: "Se registro correctamente, ya puede iniciar sesion",
    });
  }
}

export async function registerGet(req: Request, res: Response) {
  res.render("register", {
    title: "registro correcto",
    registerexito: "Se registro correctamente, ya puede iniciar sesion",
  });
}

/* export async function cambiarestadodecuenta(req: Request, res: Response) {
    const { textoelegido, cuentaid } = req.body
    //console.log('cambiarstadocuenta ' + cambiarestadocamion)
    const camionactual = await User.findById(cuentaid)
    camionactual.estadodecuenta = textoelegido
    //console.log(cuentaid + " " + textoelegido + " " + camionactual.estadodecuenta)
    await User.findByIdAndUpdate(cuentaid, camionactual)
    return res.render('administrador')
} */
export async function administradorActualizar(req: Request, res: Response) {
  let {
    email,
    textoelegido,
    password,
    cuit,
    numerodecelular,
    cuentaid,
  } = req.body;
  const userupdate = await User.findById(cuentaid);
  userupdate.email = email;
  userupdate.password = password;
  await User.findByIdAndUpdate(cuentaid, userupdate);
  return res.render("administrador");
}

export async function register(req: Request, res: Response) {
  let { email, password, cuit, numerodecelular } = req.body;
  //console.log(req.files['dni'][0].path)
  //console.log(req.files['dni1'][0].path)
  let newUser = {
    email: email,
    password: password,
    /* cuit: cuit,
    numerodecelular: numerodecelular,
    fotodnidelante: req.files["dni"][0].path + ".png",
    fotodniatras: req.files["dni1"][0].path + ".png",
    role: "usuario",
    estadodecuenta: "Aguardando verificacion", */
  };

  /* await sharp(req.files["dni"][0].path)
    .jpeg({ quality: 50 })
    .toFile(path.resolve("./uploads/" + req.files["dni"][0].filename + ".png"));
  fs.unlinkSync(req.files["dni"][0].path);

  await sharp(req.files["dni1"][0].path)
    .jpeg({ quality: 50 })
    .toFile(
      path.resolve("./uploads/" + req.files["dni1"][0].filename + ".png")
    );
  fs.unlinkSync(req.files["dni1"][0].path); */

  const emailcheck2 = await User.findOne({
    email: new RegExp("^" + email + "$", "i"),
  });
  if (emailcheck2) {
    res.render("index", {
      title: "el usuario ya existe",
      registererror: "Un usuario con el mismo email ya existe",
    });
  } else {
    const register = new User(newUser);
    await register.save();
    res.render("index", {
      title: "registro correcto",
      registerexito: "Se registro correctamente, ya puede iniciar sesion",
    });
  }
}

export async function getPhotoById(
  req: Request,
  res: Response
): Promise<Response> {
  const { id } = req.params;
  const photo = await Persona.findById(id);
  return res.json(photo);
}

/* export async function cambiarestadocamion(req: Request, res: Response) {
  const { cambiarestadocamion2, cambiarestadocamion } = req.body;
  console.log(
    "CONTROLCAMIONSENDDATAYOTRASCOSASREQBODYcambiarestadocamion " +
      cambiarestadocamion
  );
  const camionactual = await Camion.findById(cambiarestadocamion2);
  // console.log(camionactual)
  camionactual.estadocamion = cambiarestadocamion;
  await Camion.findByIdAndUpdate(cambiarestadocamion2, camionactual);
  return res.render("contribuyente");
} */


export async function crearLicencia(req: Request, res: Response) {
  const { id } = req.params;
  const ids = await Persona.findById(id);
  res.render("crearLicencia", { persona: ids });
}
export async function postLicencia(req: Request, res: Response) {
  const {
    _id,
    fechaLicencia,
    referencias,
    numeroDeDias,
    observaciones,
    usuariosMod,
  } = req.body;
  const personaId = await Persona.findById(_id);
  let newLicencia = {
    fechaLicencia: fechaLicencia,
    referencias: referencias,
    numeroDeDias: numeroDeDias,
    observaciones: observaciones,
    persona: personaId.id,
  };
  const licencia = new Licencia(newLicencia);
  await licencia.save(async function (err) {
    if (err) return res.render("index");
    personaId.licencias.push(licencia);
    await personaId.save();
  });
  return res.render("index");
}

export async function agregarGarantia(req: Request, res: Response) {
  const { id } = req.params;
  const ids = await Persona.findById(id);
  res.render("agregarGarantia", { persona: ids });
}
export async function postGarantia(req: Request, res: Response) {
  const { _id, presentadaFecha, garantia, observaciones } = req.body;
  const personaId = await Persona.findById(_id);
  let newGarantia = {
    presentadaFecha: presentadaFecha,
    garantia: garantia,
    observaciones: observaciones,
    persona: personaId.id,
  };
  const garantias = new Garantia(newGarantia);
  await garantias.save(async function (err) {
    if (err) return res.render("index");
    personaId.garantias.push(garantias);
    await personaId.save();
  });
  return res.render("index");
}

/* export async function getPhotos(req: Request, res: Response): Promise<Response> {
    const photos = await Photo.find().lean(true)
    return res.send(photos)
}

export async function createPhoto(req: Request, res: Response): Promise<Response> {
    const { title, description } = req.body

    const newPhoto = {
        title: title,
        description: description,
        imagePath: req.file.path + ".png"
    }
    const photo = new Photo(newPhoto)
    await photo.save()
    await sharp(req.file.path)
        .jpeg({ quality: 50 })
        .toFile(
            path.resolve('./uploads/' + req.file.filename + ".png")
        )
    fs.unlinkSync(req.file.path)
    return res.json({
        message: 'Photo successfully saved',
        photo
    })
}

export async function deletePhoto(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const photo = await Photo.findByIdAndRemove(id)
    if (photo) {
        await fs.unlink(path.resolve(photo.imagePath))
    }
    return res.json({
        message: 'Photo Deleted',
        photo
    })
}
export async function updatePhoto(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const { title, description } = req.body
    const updatePhoto = await Photo.findByIdAndUpdate(id, {
        title,
        description
    }, { new: true })
    return res.json({
        message: 'Successfully Updated',
        updatePhoto
    })
}
export function helloworld(req: Request, res: Response): Response {
    return res.send('asdsada')
} */
