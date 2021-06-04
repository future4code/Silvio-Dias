import axios from "axios"

export const enterStudent = (newStudent) =>{
    const BASE_URL = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/silvio/`
    return BASE_URL // Retorna BASE_URL
}

export  const restartMatch = () =>{ //Reinicia API
    axios
    .put(enterStudent() + "clear")
    .then((response) => {
    })
    .catch((err) => {
        alert(err)
    })
}
