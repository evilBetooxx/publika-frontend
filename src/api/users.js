import axios from "./axios.js"

export const getUsersOnlineRequest = async () => axios.get(`/users-online`)