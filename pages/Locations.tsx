import React from "react";
import { GetServerSideProps } from "next";
import prisma from "../lib/prisma";

export default function Locations({ locations }: { locations: any }) {
  console.log(locations);
  return <div>Categories</div>;
}
export const getServerSideProps: GetServerSideProps = async () => {
  const locations = await prisma.location.findMany({
    distinct: ["name"]
  });

  return {
    props: {
      locations: locations
    }
  };
};
