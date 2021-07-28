import { Request, Response } from "express";
import { connection } from "../data/connection";
import { address, user } from "../types";
import transporter from"../mailtransporter"
import Axios from "axios"


export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname, email, CEP,numero } = req.body


      if (!name || !nickname || !email || !CEP || !numero) {
         res.statusCode = 422
         throw "'name', 'nickname', 'email' e 'address' são obrigatórios"
      }

      const result = await Axios.get(`https://viacep.com.br/ws/${CEP}/json/`)
      
      const id: string = Date.now().toString()

      const fullAddress:address =  { //Armazena endereço
         cep: CEP,
         logradouro: result.data.logradouro,
         numero:numero,
         complemento:result.data.complemento,
         bairro:result.data.bairro,
         cidade:result.data.localidade,
         estado:result.data.uf,
         id_usuario:id
      }

      const newUser: user = { id, name, nickname, email, CEP }

      await connection('aula51_users').insert(newUser)
      await connection('address').insert(fullAddress)

      const mailInfo = await transporter.sendMail({
         from: `<${process.env.NODEMAILER_USER}>`,
         to: "g6e8k2i3m1o7e5d9@labenualunos.slack.com",
         subject:"Paiva Silvio",
         html:`
            <p>Não entendi a questão do objeto</p>
            <p>Nickname:${nickname}</p>
            <p>Email:${email}</p>
         `,
         text:`
            Clique no link abaixo para concluir seu cadastro na nossa plataforma:
            www.fakelink.com
         `
      })

      res.status(201).send("Usuário criado!")

   } catch (error:any) {

      if (typeof error === "string") {

         res.send(error)
      } else {
         
         console.log(error.sqlMessage || error.message);
         res.status(500).send(error.sqlMessage || error.message)
      }

   }
}