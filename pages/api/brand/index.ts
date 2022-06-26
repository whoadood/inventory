// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { Brand } from "@prisma/client";
import { prisma } from "../../../lib/prisma";

type Data = {
  brands: { id: number; name: string; address: string }[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const brands = await prisma.brand.findMany({
    distinct: ["name"]
  });
  const formatBrands = brands.map((brand) => ({
    id: brand.id,
    name: brand.name,
    address: brand.website.split("https://www.")[1]
  }));

  res.status(200).json({ brands: formatBrands });
}
