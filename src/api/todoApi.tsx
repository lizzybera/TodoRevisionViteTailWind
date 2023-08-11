import axios from "axios"

// interface iTodo{
//     task? : string,
//     userID? : string
// }

// const url = "http://localhost:2658/api/v1/"
const url = "https://revision-my3s.onrender.com/api/v1"

export const createTodo = async (data : any, userID : string) =>{
    return await axios.post(`${url}/${userID}/create`, data).then((res : any) =>{
        return res.data.data
    })
}

export const viewTodo = async (data : any) =>{
    return await axios.get(`${url}/task`, data).then((res) =>{
        return res.data.data
    })
}

export const viewOneTodo = async (data : any) =>{
    return await axios.get(`${url}/onetask`, data).then((res) =>{
        return res.data.data
    })
}

export const deleteOneTodo = async (id : string) =>{
    return await axios.delete(`${url}/${id}/delete`).then((res) =>{
        return res.data.data
    })
}