import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import createEstudante from "./endpoints/createEstudante";
import createTurma from "./endpoints/createTurma";
import createDocente from "./endpoints/createDocente";
import getTurmas from "./endpoints/getTurmas";
import getEstudantes from "./endpoints/getEstudantes";
import changeEstudanteTurma from "./endpoints/changeEstudanteTurma";
import getDocentes from "./endpoints/getDocentes";
import changeDocenteTurma from "./endpoints/changeDocenteTurma";

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
		host: process.env.DB_HOST,
		port: 3306,
		user: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_NAME,
	},
});

const app: Express = express();
app.use(express.json());
app.use(cors());

app.get("/user/:nome", getEstudantes);
app.post("/user", createEstudante);
app.post("/user/mudar-turma", changeEstudanteTurma);
app.post("/turma", createTurma);
app.post("/criar-docente", createDocente);
app.get("/turmas", getTurmas);
app.get("/buscar-docentes", getDocentes);
app.post("/mudar-docente", changeDocenteTurma);

const server = app.listen(process.env.PORT || 3003, () => {
	if (server) {
		const address = server.address() as AddressInfo;
		console.log(
			`Server is running in http://localhost: ${address.port}`
		);
	} else {
		console.error(`Failure upon starting server.`);
	}
});
