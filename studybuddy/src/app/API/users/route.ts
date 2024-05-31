import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/client";

export const dynamic = "force-dynamic";

export async function GET(request: Request, response: Response) {
  return new Response("Hello World", {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    },
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { username, email, password } = req.body;

      const createUser = await prisma.user.create({
        data: {
          username,
          email,
          password,
        },
      });

      res.status(200).json(createUser);
      console.log(createUser);
    } catch (error) {
      res.status(500).json({ error: "User creation failed" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

//secure?password!
