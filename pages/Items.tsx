import type { GetServerSideProps } from "next";
import { prisma } from "../lib/prisma";
import Head from "next/head";
import { Brand, Category, Location } from "@prisma/client";
import ItemTable from "../components/ItemTable";
import Section from "../layout/Section";
import CreateButton from "../components/CreateButton";
import useWindowSize from "../hooks/useWindowSize";

export type IServerItem = {
  id: number;
  price: number;
  working: boolean;
  Item: IServerItemDetails;
  Brand: Brand;
  Location: Location;
};
export type IServerItemDetails = {
  name: string;
  Category: Category;
};

const Items = ({ items }: { items: IServerItem[] }) => {
  const { windowWidth } = useWindowSize();

  return (
    <div>
      <Section title="Inventory">
        <>
          <ItemTable
            items={items}
            headers={
              windowWidth > 600
                ? ["id", "item", "type", "location", "price"]
                : ["item", "type", "location"]
            }
          />
          <CreateButton to={"/create/Item"} />
        </>
      </Section>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const items = await prisma.itemInfo.findMany({
    select: {
      id: true,
      price: true,
      working: true,
      Brand: true,
      Comment: true,
      Location: true,
      Item: {
        select: {
          name: true,
          Category: true
        }
      }
    }
  });

  return {
    props: {
      items
    }
  };
};

export default Items;
