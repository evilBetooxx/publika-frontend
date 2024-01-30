import { createContext, useState, useContext } from "react";
import {
  getPostsRequest,
  getPostByIdRequest,
  createPostRequest,
  updatePostRequest,
  deletePostRequest,
} from "../api/post";

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

  const createPost = async (post) => {
    try {
      const res = await createPostRequest(post);
      console.log(res.data);
      // Puedes manejar la respuesta según tus necesidades
    } catch (error) {
      console.log(error);
    }
  };

  const updatePost = async (id, post) => {
    try {
      const res = await updatePostRequest(id, post);
      console.log(res.data);
      // Puedes manejar la respuesta según tus necesidades
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (id) => {
    try {
      const res = await deletePostRequest(id);
      console.log(res.data);
      // Puedes manejar la respuesta según tus necesidades
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        post,
        getPosts,
        getPostById,
        createPost,
        updatePost,
        deletePost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
