import axios from "axios";
const BASEURL = "https://fakestoreapi.com"

export const getApi = axios.create({
    baseURL: BASEURL
})