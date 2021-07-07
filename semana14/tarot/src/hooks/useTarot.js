import {useState} from 'react'
import axios from "axios"

function useTarot() {
    const [tarot,setTarot] = useState([{}])

    const getTarot = () => {
        axios
        .get("tarot.json")
        .then((response) => {
            setTarot(response.data)
        })
      }
    
    return {tarot,getTarot}
}

export default useTarot
