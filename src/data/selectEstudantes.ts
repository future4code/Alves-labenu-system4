import { connection } from "../index";

export default async function selectEstudantes(
	nome: string,
	id?: string
) {
	const [result] = await connection("estudante_labesystem")
		.select("*")
		.where({ nome })
		.orWhere({ id });
	return result;
}
