import { useContext } from "react";
import { postsContext } from "../contexts/PostsContext";



function PostsPages(){
const context = useContext(postsContext)
const posts = context?.states.posts

return(
   <div>
    {posts?.map((post) => (
        <li key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </li>
    ))}
      
   </div>
)
}

export default PostsPages;