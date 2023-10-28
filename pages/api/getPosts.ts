import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../prisma/client'
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if(req.method === 'GET'){
        try {
            // Fetch posts with prisma
            const data = prisma.post.findMany()
            console.log("Data",data);
            return res.status(200).json(data)

        } catch (error) {
            return res.status(500).json(error)
        }
    }
}