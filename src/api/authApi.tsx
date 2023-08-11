import axios from "axios"


// const url = "http://localhost:2658/api/v1"
const url = "https://revision-my3s.onrender.com/api/v1"

export const registerAuth = async (data : any) =>{
    return await axios.post(`${url}/register`, data).then((res) =>{
        return res.data.data
    })
}

export const signinAuth = async (data : any) =>{
    return await axios.post(`${url}/signIn`, data).then((res) =>{
        return res.data.data
    })
}

export const viewOneAuth = async (authID : string ) =>{
    return await axios.get(`${url}/${authID}/oneUser`).then((res) =>{
        return res.data.data
    })
}