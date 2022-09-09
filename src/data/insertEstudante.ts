import { connection } from "../index";
import { Student } from "../types";

export default async function insertEstudante(newStudent: Student) {
	const result = await connection("estudante_labesystem").insert(
		newStudent
	);
	return result;
}
