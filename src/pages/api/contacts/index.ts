import type { NextApiRequest, NextApiResponse } from "next";
import db, { addContactToDb } from "@/utils/sqlite";

export default async function handleAllUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
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
  } else if (req.method === "POST") {
    const body = req.body;
    console.log(body);
    console.log(typeof body);
    // res.status(200).send("Hello");
    await addContactToDb(body)
      .then((succ) => res.status(200).send(succ))
      .catch((err) => res.status(500).send(err));
  } else {
    res.status(403).send("Invalid method type.");
  }
}
