import { Request, Response } from "express";
import buscaDocente, { updateDocente } from "../data/selectDocentes";

export default async function changeDocenteTurma(req:Request, res: Response) {
    try {
        const {idDocente, turma} = req.body

        if (!idDocente || !turma) {
            throw new Error("Os dados devem ser preenchidos")
        }

        const docenteExiste = await buscaDocente(idDocente)

        if (!docenteExiste) {
            throw new Error(`Docente com id ${idDocente} não existe`)
        }
        await updateDocente(idDocente,turma)

        res.status(200).send({message: "Docente alterado com sucesso"})
    } catch (error:any) {
        res.status(500).send({message: error.message})
    }
}