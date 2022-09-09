import { Request,  Response } from "express";
import selectTurma from "../data/selectTurma";


export default async function getTurmas(req: Request, res: Response){
    try {
       const allTurmas = await selectTurma()

       //Se não vim
       if(!allTurmas?.length){
        throw new Error("Não tem turma cadastrada!")
       }

       res.status(200).send(allTurmas)
    } catch (error:any) {
        res.status(500).send({message:error.message})
        
    }
}