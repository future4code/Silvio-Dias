import express, {Express} from "express"
import cors from "cors"

export const app: Express = express()

app.use(express.json())
app.use(cors())

app.get("/", (reg,res) => {
    res.send("Express Funcionando")
}) 

app.listen(3003, () => {
    console.log("Server Funcionando")
})