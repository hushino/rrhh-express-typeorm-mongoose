import { Request, Response } from "express";
import { Persona } from "../entity/Persona";
import * as typeorm from "typeorm";

export async function crearPersona(req: Request, res: Response) {
  res.render("crearPersona");
}

export async function postPersona(req: Request, res: Response) {
  await typeorm
    .getRepository(Persona)
    .createQueryBuilder()
    .insert()
    .into(Persona)
    .values({ ...req.body })
    .execute();
  return res.render("personas");
}

export async function personas(req: Request, res: Response) {
  let perPage: number = 5;
  let page: any = req.params.page || 1;

  const personaCount = await typeorm.getRepository(Persona).findAndCount();

  const personaRepo = await typeorm
    .getRepository(Persona)
    .createQueryBuilder()
    .orderBy("persona.id", "DESC")
    .take(perPage)
    .skip(perPage * page - perPage)
    .getMany();

  res.render("personas", {
    serie: personaRepo,
    current: page,
    pages: Math.ceil(personaCount[1] / perPage),
  });
}

export async function verPersona(req: Request, res: Response) {
  const { id } = req.params;
  const personaRepo = await typeorm.getRepository(Persona).findOne(id);
  console.log(personaRepo);
  res.render("verPersona", { persona: personaRepo });
}
