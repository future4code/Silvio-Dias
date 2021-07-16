import {app} from "./app"
import { getAllUsers } from "./endpoints/getAllUsers"
import { getBySearch } from "./endpoints/getUserBySearch"
import { usersByType } from "./endpoints/getUsersByType"
import { addUser } from "./endpoints/addUser"

app.get("/users",getAllUsers)
app.get("/users/:type",usersByType)
app.get("/user/search",getBySearch)
app.post("/user/add",addUser)