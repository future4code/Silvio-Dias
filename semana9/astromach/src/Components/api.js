import axios from "axios"

export const enterStudent = (newStudent) =>{
    const BASE_URL = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/teste/`
    return BASE_URL
}

export  const restartMatch = () =>{
    axios
    .put(enterStudent() + "clear")
    .then((response) => {
    })
    .catch((err) => {
        alert(err)
    })
}
