import axios from "axios";
import { NetworkForm, NetworkPostsProps } from "../page/network";

const url = 'https://dev.codeleap.co.uk/careers/'

export async function getPosts(){
    const res = await axios.get(`${url}?format=json`)
    .then((response) => response.data.results)

    return res;
}

export function postPosts(newPost: NetworkForm){
    axios.post(`${url}`, {
        "username": `${newPost.username}`,
        "title": `${newPost.title}`,
        "content": `${newPost.content}`,
    })
    .then((response) => {
        window.alert("Post create!");
    })
    .catch((error) => {
        console.log(error)
    })
}

export function updatePostPosts(updatePost: NetworkPostsProps){
    axios.put(`${url}${updatePost.id}`, {
        "title": `${updatePost.title}`,
        "content": `${updatePost.content}`,
    })
    .then((response) => {
        window.alert("Post Update")
    })
    .catch((error) => {
        console.log(error)
    })
}

export function deletePostPosts(updatePost: NetworkPostsProps){
    axios.delete(`${url}${updatePost.id}/`, {})
    .then((response) => {
        window.alert("Post deleted");
    })
    .catch((error) => {
        console.log(error)
    })
}