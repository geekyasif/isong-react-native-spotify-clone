import axios from "axios";

const api = axios.create({
    baseURL: process.env.SPOTIFY_BASE_API_URL
})