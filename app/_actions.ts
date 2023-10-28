"use server";

import prisma from "@/prisma/client";
import z from "zod";
import { formSchema } from "./components/Form";

export const createPost = async ({
  title,
  content,
}: z.infer<typeof formSchema>) => {
  const newPost = await prisma.post.create({ data: {
    title, content, userId: 1
  } });

  return newPost.id;
};

const deletePostSchema = z.object({
  id: z.number()
})

export const deletePost = async ({
  id
}: z.infer<typeof deletePostSchema>) => {
  try {
    // Check if the post exists
    const postExists = await prisma.post.findUnique({
      where: { id },
    });

    if (!postExists) {
      throw new Error('Post not found');
    }

    await prisma.post.delete({
      where: { id },
    });

    return true;
  } catch (error) {
    console.error('Error deleting post:', error);
    throw error;
  }
};


export const getPosts = async () => {
  const data : {id: number; title: string; content: any}[] = await prisma.post.findMany()
  return data
}