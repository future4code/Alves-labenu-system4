import { connection } from "../index";
import {  Turma } from "../types";

export default async function insertTurma(newTurma: Turma) {
	const result = await connection("turma_labesystem").insert(
		newTurma
	);
	return result;
}
