import {connection} from "../connection"

export default async function selectUsers(){
    const result = await connection("TodoListUser")
        .select('*')

        return result
}