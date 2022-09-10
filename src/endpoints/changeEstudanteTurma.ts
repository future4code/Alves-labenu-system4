import { Request, Response } from "express";
import insertEstudante from "../data/insertEstudante";
import selectEstudantes from "../data/selectEstudantes";
import { updateEstudante } from "../data/updateEstudante";
import { Student } from "../types";

export default async function changeEstudanteTurma(
	req: Request,
	res: Response
): Promise<void> {
	try {
		const { idEstudante, turma } = req.body;

		if (!idEstudante || !turma) {
			res.statusCode = 422;
			throw "'idEstudante', 'turma' são obrigatórios!";
		}

		const estudanteExiste = await selectEstudantes("", idEstudante);

		if (!estudanteExiste) {
			throw `Estudante com o id ${idEstudante} não existe`;
		}

		await updateEstudante(idEstudante, turma);
		res
			.status(201)
			.send(
				`Turma do estudante ${idEstudante} alterada para ${turma}!`
			);
	} catch (error: any) {
		if (typeof error === "string") {
			res.send(error);
		} else {
			console.log(error.sqlMessage || error.message);
			res.status(500).send("Ops! Um erro inesperado ocorreu");
		}
	}
}
