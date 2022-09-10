import { connection } from "../index";

export default async function selectEstudantes(nome: string) {
	const result = await connection("estudante_labesystem")
		.select("*")
		.where("nome", nome);
	return [result];
}
