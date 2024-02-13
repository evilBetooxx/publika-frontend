import { createContext, useState, useContext } from "react";
import {
  getPostsRequest,
  getPostByIdRequest,
  getCategoriesRequest,
  createPostRequest,
  updatePostRequest,
  deletePostRequest,
} from "../api/post.js";

const PostContext = createContext();

export const usePost = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePost must be used within a PostProvider");
  }
  return context;
};

export function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState([]);
  const [categories, setCategories] = useState([]); 
  const [notify, setNotify] = useState(null);

  const getPosts = async () => {
    try {
      const res = await getPostsRequest();
      console.log(res.data);
      setPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPostById = async (id) => {
    try {
      const res = await getPostByIdRequest(id);
      console.log(res.data);
      setPost(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategories = async () => {
    try {
      const res = await getCategoriesRequest();
      console.log(res.data);
      setCategories(res.data);
    } catch (error) {
      console.log(error);
    }
  }


  const createPost = async (post) => {
    try {
      const res = await createPostRequest(post);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updatePost = async (id, post) => {
    try {
      const res = await updatePostRequest(id, post);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (id) => {
    try {
      const res = await deletePostRequest(id);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const postNotify = (message) => {
    setNotify(message);
    setTimeout(() => {
      setNotify(null);
    }, 2000);
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        post,
        notify,
        categories,
        postNotify,
        getPosts,
        getPostById,
        getCategories,
        createPost,
        updatePost,
        deletePost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
