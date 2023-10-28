'use client'
import {useState, useEffect, useContext} from 'react'
import { getPosts } from "../_actions";
import DeleteBtn from './DeleteBtn';
import { PostsContext } from '../context/PostsContext';

function PostsList() {

    // const [posts, setPosts] = useState([])
    // const [loading, setLoading] = useState(true)

    const {posts, loading} = useContext(PostsContext)

    // useEffect(() => {
    //     const getData : any = async () => {
    //         const data = await getPosts()
    //         setPosts(data)
    //         setLoading(false)
    //     }
    //     getData()
    // }, [])
    
    if(loading){
        
        return(
            <div>
                <span className="loading loading-infinity loading-lg"></span>
            </div>
        )
    } else {
        console.log("POSTS", posts);
        return (
            <div className='w-3/4'>
                {posts.map((post:any) => (
                    <div className=' my-6'>
                      <h2 className='text-2xl text-primary'>{post.title}</h2>
                      <p>{post.content}</p>
                      <DeleteBtn id={post.id}></DeleteBtn>
                    </div>
                    ))}
            </div>
          )
    }

  
}

export default PostsList