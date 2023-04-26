import type { NextApiRequest, NextApiResponse } from "next";
// import db, { addContactToDb } from "@/utils/sqlite";
import prisma from "../../../utils/prisma";

export default async function handleAllUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const response = await prisma.toy_table.findMany();
    res.status(200).json(response);
  } else if (req.method === "POST") {
    const result = await prisma.toy_table.create({
      data: {
        ...req.body,
      },
    });
    res.status(201).json(result);
  } else {
    res.status(403).send("Invalid method type.");
  }
}
