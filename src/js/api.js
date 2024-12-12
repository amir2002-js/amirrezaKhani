import axios from "axios";
const BASEURL1 = "https://fakestoreapi.com"
const BASEURL2 = "https://dummyjson.com/comments"
export const getApi = axios.create({
    baseURL: BASEURL1
})

export const getCommentsApi = axios.create({
    baseURL: BASEURL2
})