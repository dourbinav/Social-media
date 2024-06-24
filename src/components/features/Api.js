import axios from "axios"

export function UserLogin(data){
    console.log(data)
    return axios.post("http://localhost:9090/user/login",data)
}
 
export function SearchUsers(data){
    return axios.post("http://localhost:9090/search",data)
}

export function UserRegister(data){
    return axios.post("http://localhost:9090/user/register",data)
}

export function fetchPosts (){
    return axios.get("http://localhost:9090/post/")
}

export function fetchUserPosts (data){
    return axios.get("http://localhost:9090/post/",data)
}

export function fetchUsers (){
    return axios.post("http://localhost:9090/post/")
}

export function AddtoPosts (data){
    for (let [key, value] of data.entries()) {
        console.log(key, value);
    }
    return axios.post("http://localhost:9090/post/profile",data,{
        headers: {
            'Content-Type': 'multipart/form-data'
        }
 } );
}
