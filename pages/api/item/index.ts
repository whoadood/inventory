// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { ItemInfo } from "@prisma/client";
import prisma from "../../../lib/prisma";

type Data = {
  item: ItemInfo;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { itemInfo } = req.body;
  const { itemDetails, brand, location } = itemInfo;
  const { category } = itemDetails;

  const newItem = await prisma.itemInfo.create({
    data: {
      price: itemInfo.price,
      working: itemInfo.working,
      Item: {
        connectOrCreate: {
          where: {
            name: itemDetails.name,
          },
          create: {
            name: itemDetails.name,
            Category: {
              connectOrCreate: {
                where: {
                  type: category.type,
                },
                create: {
                  type: category.type,
                },
              },
            },
          },
        },
      },
      Brand: {
        connectOrCreate: {
          where: {
            name: brand.name,
          },
          create: {
            name: brand.name,
            website: brand.website,
          },
        },
      },
      Location: {
        connectOrCreate: {
          where: {
            name: location.name,
          },
          create: {
            name: location.name,
            address: location.address,
          },
        },
      },
    },
    include: {
      Item: {
        include: {
          Category: true,
        },
      },
      Brand: true,
      Location: true,
    },
  });

  res.status(200).json({ item: newItem });
}
