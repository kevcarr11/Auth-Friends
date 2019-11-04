import axios from "axios"

function AuthWithAxios() {
  return axios.create({
    baseURL: "http://localhost:5000",
    headers: {
      Authorization: localStorage.getItem("token")
    }
  })
}

export default AuthWithAxios
