import { Request, Response } from "express";
import selectEstudantes from "../data/selectEstudantes";

export default async function getEstudantes(
	req: Request,
	res: Response
) {
	try {
		const nome = req.params.nome;
		const result = await selectEstudantes(nome, "");

		res.status(201).send(result);
	} catch (error: any) {
		if (typeof error === "string") {
			res.send(error);
		} else {
			console.log(error.sqlMessage || error.message);
			res.status(500).send("Ops! Um erro inesperado ocorreu =/");
		}
	}
}
