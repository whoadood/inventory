import React from "react";
import NewItemForm from "../../components/NewItemForm";
import Section from "../../layout/Section";
import prisma from "../../lib/prisma";
import { GetServerSideProps } from "next";
import { Location } from "@prisma/client";

export type ItemProps = {
  brands: Location[];
  locations: Location[];
};

const Item = ({ brands, locations }: ItemProps) => {
  return (
    <div>
      <Section title="Create Item">
        <NewItemForm brands={brands} locations={locations} />
      </Section>
    </div>
  );
};

export default Item;

export const getServerSideProps: GetServerSideProps = async () => {
  const brands = await prisma.brand.findMany({
    distinct: ["name"]
  });

  const formatBrands = brands.map((brand) => ({
    id: brand.id,
    name: brand.name,
    address: brand.website.split("https://www.")[1]
  }));

  const locations = await prisma.location.findMany({
    distinct: ["name"]
  });

  return {
    props: {
      brands: formatBrands,
      locations
    }
  };
};
