import Image from 'next/image'

import prisma from '../prisma/client'

import Form from './components/Form'
import DeleteBtn from '@/app/components/DeleteBtn';

import { getPosts } from "./_actions";
import PostsList from '@/app/components/PostsList';


export default async function Home() {

  let data : any = []
  data = await getPosts()

  return (
   <div className='w-11/12 mx-auto mt-10'>
      <h1 className="text-primary text-3xl">Posts</h1>

      <div className="grid grid-cols-2 mt-20">

        <Form />

        <PostsList></PostsList>

      </div>

      

   </div>
  )
}
