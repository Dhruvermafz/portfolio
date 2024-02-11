import axios from "axios"
import { API_BASE_URL, BASE_URL } from "../../config"


const getTokenFromLocalStorage = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;

//  const config = {
//      headers: {
//          "Authorization": `Bearer ${getTokenFromLocalStorage.token}`,
//          "Accept": `application/json`
//      }
//  }


const login = async (userData) => {
    const response  = await axios.post(`${API_BASE_URL}/api/auth/signin`, userData)

    if(response.data) {
        localStorage.setItem("user", JSON.stringify(response.data))
    }
    return response.data
}

const authService = {
    login
}

export default authService