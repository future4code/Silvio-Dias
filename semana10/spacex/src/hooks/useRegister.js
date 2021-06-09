import axios from "axios"
import {BASE_URL} from "../constants/url"
function useRegister(id,body) {
    axios
    .post(BASE_URL,body)
    .then((response) => {
        console.log(response)
    })
    .catch((err) => {
        console.log(err)
    })
}

export default useRegister
