import { usePost } from "../../context/PostContext"
import Card from "./Card"
import { useEffect } from "react"

function LoadCard() {
    const { getPosts, posts } = usePost()
    useEffect(() => {
        getPosts()
    }, [])
  return (
    <>
    {posts.map((post) => (
      <Card key={post._id} post={post} />
    ))}
  </>
  )
}

export default LoadCard