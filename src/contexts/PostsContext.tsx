import { createContext, useEffect, useState } from "react"
import { Api } from "../serve/serve"

type propChildren = {
    children: React.ReactNode
}

type Posts = {
    id: number
    title: string
    body: string
    tags: string[]
    reactions: {
        likes: number
        dislikes: number
    }
    views: number
    userId: number
}

type PostsPromise = {
 posts: Posts[]
}


type valueContextType = {
 states: {
    posts: Posts[]
 }
}



export const postsContext = createContext<valueContextType | null>(null)

function PostsProvider({children}: propChildren){

    const [posts, setPosts] = useState<Posts[]>([])
    console.log(posts)
   
useEffect(() => {
  async function getPosts(){
    try{
     const {data} = await Api.get<PostsPromise>("/posts")
     setPosts(data.posts)
    }catch(error){
        console.log(error)
    } 
  }
  getPosts()
},[])


const valueContext = {
 states: {
    posts
 }
}


    return(
       <postsContext.Provider value={valueContext}>
        {children}
       </postsContext.Provider>
    )
}

export default PostsProvider;