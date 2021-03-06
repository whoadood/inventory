import React from "react";
import { GetServerSideProps } from "next";
import { prisma } from "../lib/prisma";
import Section from "../layout/Section";
import ItemTable from "../components/ItemTable";

export default function Locations({ locations }: { locations: any }) {
  console.log("locations", locations);

  return (
    <div>
      <Section title="Locations">
        <ItemTable items={locations} headers={["id", "name", "item qty"]} />
      </Section>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const locations = await prisma.location.findMany({
    distinct: ["name"],
    select: {
      id: true,
      name: true,
      address: true,
      ItemInfo: {
        select: {
          Item: {
            select: {
              Category: true
            }
          }
        }
      }
    }
  });

  const formatLocations = locations.map((location) => {
    return {
      ...location,
      ItemInfo: location.ItemInfo.reduce((acc: any, cur) => {
        if (acc[cur.Item.Category.type]) {
          acc[cur.Item.Category.type] += 1;
        } else {
          acc[cur.Item.Category.type] = 1;
        }
        return acc;
      }, {})
    };
  });

  return {
    props: {
      locations: formatLocations
    }
  };
};
