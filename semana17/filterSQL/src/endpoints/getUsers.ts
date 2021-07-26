import {Response,Request} from "express"
import { connection } from "../connection"
import { user } from "../type"

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {

      const topic = req.params.type ? "type":"name"

      const search = req.params.type? 
      req.params.type: req.query.name? req.query.name:"%"

      const order = req.query.order === "DESC" ? "DESC" : "ASC"
      const sort = req.query.sort === "name" ? "name":"email"
      const size = Number(req.query.limit) || 5
      const page = Number(req.query.page) || 1
      const offset:number = size * (page -1)

      const result = await connection("aula48_exercicio")
         .select("*")
         .where(topic, "LIKE", `%${search}%`)
         .orderBy(sort, order)
         .limit(size)
         .offset(offset)

      const users = result.map(toUser)

      res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }

 const toUser = (input:any):user => {
   return{
      id:input.id,
      name:input.name,
      email:input.email,
      type:input.type
   }
 }