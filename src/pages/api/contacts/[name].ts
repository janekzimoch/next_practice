import type { NextApiRequest, NextApiResponse } from "next";
import db from "@/utils/sqlite";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await new Promise((resolve, reject) => {
    db.all("SELECT * FROM toy_table", (err, rows: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
  res.status(200).json(response);
}
