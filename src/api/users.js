import axios from "./axios.js"

export const getUsersOnlineRequest = async () => axios.get(`/users-online`)
export const getUserByIdRequest = async (data) => axios.post(`/user-by-id`, data)