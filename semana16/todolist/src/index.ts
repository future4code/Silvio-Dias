import { app } from "./app"
import createUser from "./endpoints/createUser"
import getUsers from "./endpoints/getUsers"
import getUserById from "./endpoints/getUserById"
import editUser from "./endpoints/editUser"

app.post('/user', createUser)

app.get('/user/:id', getUserById)
app.get("/users", getUsers )

app.put('/user/edit/:id', editUser) 