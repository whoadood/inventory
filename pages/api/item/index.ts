import type { NextApiRequest, NextApiResponse } from "next";
import type { ItemInfo } from "@prisma/client";
import prisma from "../../../lib/prisma";

type Data = {
  item: ItemInfo;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { item, location, brand, category } = req.body;

  console.log("item", item);
  console.log("location", location);
  console.log("brand", brand);
  console.log("category", category);

  const newItem = await prisma.itemInfo.create({
    data: {
      price: +item.price,
      working: true,
      Item: {
        connectOrCreate: {
          where: {
            name: item.name
          },
          create: {
            name: item.name,
            Category: {
              connectOrCreate: {
                where: {
                  type: category.type
                },
                create: {
                  type: category.type
                }
              }
            }
          }
        }
      },
      Brand: {
        connectOrCreate: {
          where: {
            name: brand.name
          },
          create: {
            name: brand.name,
            website: brand.address
          }
        }
      },
      Location: {
        connectOrCreate: {
          where: {
            name: location.name
          },
          create: {
            name: location.name,
            address: location.address
          }
        }
      }
    },
    include: {
      Item: {
        include: {
          Category: true
        }
      },
      Brand: true,
      Location: true
    }
  });

  res.status(200).json({ item: newItem });
}
