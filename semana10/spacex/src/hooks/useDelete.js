import { BASE_URL, headers } from "../constants/url"
import axios from "axios"
import { useHistory } from "react-router-dom";

const useDelete = () => {

    const history = useHistory()
    
    const deleteTrip = (id) => {
        const checkDelete = window.confirm("Tem certeza que quer deletar?")
        if(checkDelete){
            axios
        .delete(`${BASE_URL}/trips/${id}`,headers)
        .then((response) => {
        })
        .catch((err) => {
            console.log(err)
        })
        }
        
    }

    const clicktoDelete = (id) => {
        deleteTrip(id)
    }

    return clicktoDelete

}

export default useDelete
