import "reflect-metadata";
import { App } from "./app";
//import { startConnection } from "./databases";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { Persona } from "./entity/Persona";
import { Licencia } from "./entity/Licencia";

async function main() {
  //startConnection(); //mongodb
  createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "mirrhh",
    entities:[User,Persona,Licencia],
    synchronize: true,
    logging: false
  })
    .then(async (connection) => {
      const app = new App(3000);
      await app.listen();
    })
    .catch((error) => console.log("TypeORM connection error: ", error));
}
main();
