import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/client";
import { stringify } from "querystring";

export const dynamic = "force-dynamic";

export async function GET(request: Request, response: Response) {
  return new Response(JSON.stringify("Hello World!"), {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    },
  });
}
