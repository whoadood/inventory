// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { Location } from "@prisma/client";
import { prisma } from "../../../lib/prisma";

type Data = {
  locations: Location[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const locations = await prisma.location.findMany({
    distinct: ["name"]
  });

  res.status(200).json({ locations: locations });
}
