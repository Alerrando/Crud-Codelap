import axios from "axios";
import { NetworkForm } from "../page/network";

const url = 'https://dev.codeleap.co.uk/careers/'

export async function getPosts(){
    const res = await axios.get(`${url}?format=json`)
    .then((response) => response.data.results)

    return res;
}

export async function postPosts(newPost: NetworkForm){
    console.log(newPost)
    axios.post(`${url}`, {
        "username": `${newPost.username}`,
        "title": `${newPost.title}`,
        "content": `${newPost.content}`,
    })
    .then((response) => {
        console.log(response)
        window.alert("Post create!");
    })
    .catch((error) => {
        console.log(error)
    })
}