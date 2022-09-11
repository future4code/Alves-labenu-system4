import { Request, Response } from "express";
import insertDocente from "../data/insertDocente";
import { Docente } from "../types";
import moment from "moment"

export default async function createDocente(req:Request, res:Response) {
    try {
        const { nome, email, data_nasc, turma_id} = req.body

        if(!nome || !email || !data_nasc || !turma_id){
            throw new Error("Falta preencher algum campo")
        }

        const dataNascimento = moment(data_nasc,"YYYY-MM-DD").format("DD/MM/YYYY")

        const novoDocente:Docente = {
            id: Date.now().toString(),
            nome,
            email, 
            data_nasc:dataNascimento,
            turma_id
        }

        await insertDocente(novoDocente)

        res.status(201).send({message: "Docente criado com sucesso"})
        
    } catch (error:any) {
        res.status(500).send({message: error.message})
        
    }
 
    
}