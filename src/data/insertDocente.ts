import { connection } from "../index";
import { Docente } from "../types";


export default async function insertDocente (docente: Docente):Promise<void> {
    const { id, nome, email, data_nasc, turma_id} = docente

    await connection("docente_labesystem")
    .insert({
        id,
        nome,
        email,
        data_nasc,
        turma_id
    })
}