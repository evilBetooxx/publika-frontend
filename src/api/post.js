import axios from "./axios"

export const getPostsRequest = async () => axios.get(`/posts`)
export const getCategoriesRequest = async () => axios.get(`/categories`)
export const getPostByIdRequest = async (id) => axios.get(`/posts/${id}`)
export const createPostRequest = async (post) => axios.post(`/create-post`, post)
export const updatePostRequest = async (id, post) => axios.put(`/update-post/${id}`, post)
export const uploadPostImageRequest = async (data) => axios.post(`/upload-image`, data)
export const deletePostRequest = async (id) => axios.delete(`/delete-post/${id}`)
