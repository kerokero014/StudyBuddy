import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const flashcards = await prisma.flashcard.findMany();
    res.status(200).json(flashcards);
  } else if (req.method === "POST") {
    const { question, answer, deckId } = req.body;
    const newFlashcard = await prisma.flashcard.create({
      data: { question, answer, deckId },
    });
    res.status(201).json(newFlashcard);
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
