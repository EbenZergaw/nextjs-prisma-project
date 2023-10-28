'use client'

import { deletePost } from "@/app/_actions"

import {useContext} from 'react'
import { PostsContext } from '../context/PostsContext';

function DeleteBtn({id}:{id:number}) {

  const {getData} = useContext(PostsContext)

  const deleteHandler = () => {
    deletePost({id})
    getData()
  }


  return (
    <>
        <button onClick={deleteHandler} className="btn btn-error p-2 mt-4">Delete</button>
    </>
  )
}

export default DeleteBtn