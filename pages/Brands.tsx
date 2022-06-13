import React from "react";
import { GetServerSideProps } from "next";
import prisma from "../lib/prisma";
import Section from "../layout/Section";
import ItemTable from "../components/ItemTable";

export default function Brands({ brands }: { brands: any }) {
  console.log("brands", brands);

  return (
    <div>
      <Section title="Brands">
        <ItemTable items={brands} headers={["id", "name", "item qty"]} />
      </Section>
    </div>
  );
}
export const getServerSideProps: GetServerSideProps = async () => {
  const brands = await prisma.brand.findMany({
    include: {
      ItemInfo: {
        select: {
          Item: {
            select: {
              name: true
            }
          }
        }
      }
    }
  });

  const formatBrand = brands.map((brand) => {
    return {
      ...brand,
      ItemInfo: brand.ItemInfo.reduce((acc: any, cur) => {
        if (acc[cur.Item.name]) {
          acc[cur.Item.name] += 1;
        } else {
          acc[cur.Item.name] = 1;
        }
        return acc;
      }, {})
    };
  });

  return {
    props: {
      brands: formatBrand
    }
  };
};
