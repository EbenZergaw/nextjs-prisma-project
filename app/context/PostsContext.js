'use client'
import {createContext, useState, useEffect} from 'react'
import { getPosts } from '../_actions'

export const PostsContext = createContext("")

export default function PostsProvider({children}) {

    
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    const getData = async () => {
        const data = await getPosts()
        setPosts(data)
        setLoading(false)
    }

    useEffect(() => {
        getData()
    }, [])

    const value = {
        posts,
        loading,
        getData
    }

    return(
        <PostsContext.Provider value={value}>
          {children}
        </PostsContext.Provider>
    )
}