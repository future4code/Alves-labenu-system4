import { Request, Response } from "express";
import insertTurma from "../data/insertTurma";
import {  Turma } from "../types";


export default async function createTurma(
	req: Request,
	res: Response
): Promise<void> {
	try {
		const { nome, modulo } = req.body;

		if (!nome || !modulo) {
			res.statusCode = 422;
			throw "'nome' e 'modulo' são obrigatórios!";
		}

		const id: string = Date.now().toString();


		const newTurma: Turma = {
			id,
			nome,
			modulo
		};

		insertTurma(newTurma);
		res.status(201).send(`Turma ${nome} cadastrado(a) com sucesso!`);
	} catch (error: any) {
		if (typeof error === "string") {
			res.send(error);
		} else {
			console.log(error.sqlMessage || error.message);
			res.status(500).send("Ops! Erro inesperado ocorreu");
		}
	}
}

    