import React from "react";
import NewItemForm from "../../components/NewItemForm";
import Section from "../../layout/Section";
import { prisma } from "../../lib/prisma";
import { GetServerSideProps } from "next";
import { Category, Location } from "@prisma/client";

export type ItemProps = {
  brands: Location[];
  locations: Location[];
  categories: Category[];
};

const Item = ({ brands, locations, categories }: ItemProps) => {
  return (
    <div>
      <Section title="Create Item">
        <NewItemForm
          brands={brands}
          locations={locations}
          categories={categories}
        />
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
    address: brand.website
  }));

  const locations = await prisma.location.findMany({
    distinct: ["name"]
  });

  const categories = await prisma.category.findMany({
    distinct: ["type"]
  });

  return {
    props: {
      brands: formatBrands,
      locations,
      categories
    }
  };
};
