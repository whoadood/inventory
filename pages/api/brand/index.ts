// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { Brand } from "@prisma/client";
import prisma from "../../../lib/prisma";

type Data = {
  brands: Brand[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { itemInfo } = req.body;
  const { itemDetails, brand, location } = itemInfo;
  const { category } = itemDetails;

  const brands = await prisma.brand.findMany({
    distinct: ["name"],
  });

  res.status(200).json({ brands: brands });
}
