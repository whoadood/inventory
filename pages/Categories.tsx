import React from "react";
import { GetServerSideProps } from "next";
import prisma from "../lib/prisma";

export default function Categories({ categories }: { categories: any }) {
  console.log(categories);
  return <div>Categories</div>;
}
export const getServerSideProps: GetServerSideProps = async () => {
  const categories = await prisma.category.findMany({
    distinct: ["type"]
  });

  return {
    props: {
      categories: categories
    }
  };
};
