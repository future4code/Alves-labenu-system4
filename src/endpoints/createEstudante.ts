import { Request, Response } from "express";
import { connection } from "../index";
import { Student } from "../types";

export default async function createEstudante(
	req: Request,
	res: Response
): Promise<void> {
	try {
		const { nome, email, data_nasc, turma_id } = req.body;

		if (!nome || !email || !data_nasc || !turma_id) {
			res.statusCode = 422;
			throw "'nome', 'email', 'data_nasc', 'turma_id' são obrigatórios!";
		}

		const id: string = Date.now().toString();
		const formatDate: string = data_nasc
			.split("/")
			.reverse()
			.join("-");

		const newStudent: Student = {
			id,
			nome,
			email,
			data_nasc: formatDate,
			turma_id,
		};

		await connection("estudante_labesystem").insert(newStudent);
		res.status(201).send(`Estudante ${nome} cadastrado com sucesso!`);
	} catch (error: any) {
		if (typeof error === "string") {
			res.send(error);
		} else {
			console.log(error.sqlMessage || error.message);
			res.status(500).send("Ops! Um erro inesperado ocorreu");
		}
	}
}
