import axios from "axios"

export function UserLogin(data){
    console.log(data)
    return axios.post("http://localhost:9090/user/login",data)
}

export function UserRegister(data){
    return axios.post("http://localhost:9090/user/register",data)
}

export function fetchPosts (){
    return axios.get("http://localhost:9090/post/")
}

export function fetchUsers (){
    return axios.post("http://localhost:9090/post/")
}

export function AddtoPosts (file,caption){
    console.log(caption)
    return axios.post("http://localhost:3000/posts",caption)
}
