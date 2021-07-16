import {app} from "./app"
import { addCash } from "./endpoints/addCash"
import { addUser } from "./endpoints/addUser"
import { getAllUsers } from "./endpoints/getAllUsers"
import { getCash } from "./endpoints/getCash"
import { payBill } from "./endpoints/payBill"

app.get("/users", getAllUsers)
app.get("/user/cash", getCash)

app.post("/user/add", addUser)
app.put("/user/addCash", addCash)
app.put("/user/payBill", payBill)