import { connection } from "..";

import { TurmaInser } from "../types";

const typeTurma = (user:any) => {
    const crearTurms: TurmaInser = {
        id:user.id,
        nome:user.nome,
        modulo:user.modulo
 
    }
    return crearTurms
}
export default async function selectTurma():Promise<TurmaInser[] | undefined> {
    const result = await connection("turma_labesystem")
    console.log(result)

   const allTurmaType = result.map((user)=> {
        return typeTurma(user)
    })

    console.log(allTurmaType)


    return result

}