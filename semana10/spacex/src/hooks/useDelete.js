import { BASE_URL, headers } from "../constants/url"
import axios from "axios"

function useDelete(){
    
    const deleteTrip = (id) => {
        const checkDelete = window.confirm("Tem certeza que quer deletar?")
        if(checkDelete){
            axios
        .delete(`${BASE_URL}/trips/${id}`,headers)
        .then((response) => {
            window.location.reload();
        })
        .catch((err) => {
            alert(err)
        })
        }
    }

    const clicktoDelete = (id) => {
        deleteTrip(id)
    }

    return clicktoDelete

}

export default useDelete
