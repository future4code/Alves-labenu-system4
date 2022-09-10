import { connection } from "..";

export async function updateEstudante(
	idEstudante: string,
	idTurma: string
) {
	const result = await connection("estudante_labesystem")
		.where({ id: idEstudante })
		.update({ turma_id: idTurma });

	return result;
}
