export const BASE_URL = "https://labeddit.herokuapp.com"

export const headers = {
    headers: {
        Authorization: localStorage.getItem("token")
    }
  }