import {app} from "./app"
import { getUsersByType } from "./endpoints/getUserbyType"
import { getAllUsers } from "./endpoints/getUsers"

app.get("/users", getAllUsers)
app.get("/users/:type", getUsersByType)