import { Request, Response } from "express"
import { selectDocentes } from "../data/selectDocentes"


export default async function getDocentes(req:Request, res:Response) {
    try {
        
        const todosDocentes = await selectDocentes()

        if (!todosDocentes?.length){
            throw new Error("Não existem docentes cadastrados")
        }

        res.status(200).send(todosDocentes)
    } catch (error: any) {
        res.status(500).send({message: error.message})
    }
    
}

