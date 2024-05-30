import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const decks = await prisma.deck.findMany();
    res.status(200).json(decks);
    console.log(decks);
  } else if (req.method === "POST") {
    const { title, description, userId } = req.body;
    const newDeck = await prisma.deck.create({
      data: { title, description, userId },
    });
    res.status(201).json(newDeck);
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
