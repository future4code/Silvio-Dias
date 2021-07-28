import { Request, Response } from "express";
import { connection } from "../data/connection";
import Axios from "axios"
import { user } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname, email, cep } = req.body

      if (!name || !nickname || !email || !cep) {
         res.statusCode = 422
         throw "'name', 'nickname', 'email' e 'address' são obrigatórios"
      }

      const address = await Axios.get(`https://viacep.com.br/ws/${cep}/json/`)

      console.log(address)

      const id: string = Date.now().toString()

      const newUser: user = { id, name, nickname, email, cep }

      await connection('aula51_users').insert(newUser)

      res.status(201).send("Usuário criado!")

   } catch (error) {

      if (typeof error === "string") {

         res.send(error)
      } else {
         
         console.log(error.sqlMessage || error.message);
         res.status(500).send("Ops! Um erro inesperado ocorreu =/")
      }

   }
}