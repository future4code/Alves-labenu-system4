import { Docente } from "../types";
import moment from "moment"
import { connection } from "..";

function typeDocente (docente:any){
    const buscarDocentes:Docente={
        id: docente.id,
        nome: docente.nome,
        email: docente.email,
        data_nasc: moment(docente.data_nasc, "YYYY-MM-DD").format("DD/MM/YYYY"),
        turma_id: docente.turma_id
    }

    return buscarDocentes
}

export async function selectDocentes():Promise<Docente[] | undefined> {
    const result = await connection("docente_labesystem")
    if(result){
    const typeDocentes = result.map((docente:any) => {
        return typeDocente(docente)
    })
    return typeDocentes
    }else{
        return undefined
    }
}

export default async function buscaDocente(id:string):Promise<Docente | undefined> {
    const [result] = await connection("docente_labesystem")
        .where({ id})
    if(result) {
        const tipagemDocente = typeDocente(result)
        return tipagemDocente
    } else {
        return undefined
    }
}

export async function updateDocente(idDocente:string, turma:string) {
    await connection("docente_labesystem")
        .where("id", `${idDocente}`)
        .update({turma_id: turma})
}