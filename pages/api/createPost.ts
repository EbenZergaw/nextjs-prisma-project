// pages/api/createPost.ts
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { title, content } = req.body;
  console.log("TITLE / BODY", title, content);

  try {
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        published: false,
        // Assuming the user ID is 1, update this to match your setup
        userId: 1,
      },
    });

    console.log(newPost);

    return res.status(201).json(newPost);

  } catch (error) {
    
    return res.status(500).json({error});
  }
}
