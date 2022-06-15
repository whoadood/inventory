import Head from "next/head";
import prisma from "../lib/prisma";
import { GetServerSideProps } from "next";
import DoughnutChart from "../charts/Doughnut";
import BarChart from "../charts/Bar";
import Totals from "../components/Totals";
import Most from "../components/Most";
import homeStyles from "../styles/Home.module.css";

// dashboard

// totals
//// total items ////
//// total locations ////

// price points
//// avg item price
//// min price
//// max price

// most used
//// most used item
// total of that type

// charts
//// doughnut chart for item types ////
//// brand item count bar chart ---
//// locations item count bar chart ////

export default function Home({
  itemTypeData,
  locationItems,
  prices,
  most
}: {
  itemTypeData: any;
  locationItems: any;
  prices: any;
  most: any;
}) {
  console.log("most", most);
  return (
    <div>
      <Head>
        <title>Inventory</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>Home</h2>
      <div className={homeStyles.charts}>
        <Most item={most} />
        <Totals
          avg={prices._avg.price.toFixed(2)}
          min={prices._min.price.toFixed(2)}
          max={prices._max.price.toFixed(2)}
        />
      </div>

      <div className={homeStyles.charts}>
        <DoughnutChart data={itemTypeData} />
        <BarChart locationItems={locationItems} />
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const itemTypeData = await prisma.item.findMany({
    select: {
      id: true,
      name: true,
      _count: {
        select: {
          ItemInfo: true
        }
      }
    }
  });

  const locationItems = await prisma.location.findMany({
    select: {
      name: true,
      ItemInfo: {
        select: {
          Item: {
            select: {
              Category: {
                select: {
                  type: true
                }
              }
            }
          }
        }
      }
    }
  });

  const prices = await prisma.itemInfo.aggregate({
    _min: {
      price: true
    },
    _max: {
      price: true
    },
    _avg: {
      price: true
    }
  });

  const most = await prisma.itemInfo.findMany({
    select: {
      Brand: true,
      Item: true
    }
  });

  const formatMost = most
    .map((item) => {
      return {
        brand: item.Brand.name,
        website: item.Brand.website,
        type: item.Item.name
      };
    })
    .reduce((acc: any, cur: any) => {
      if (acc[cur.brand]) {
        acc[cur.brand] = { ...cur, count: (acc[cur.brand].count += 1) };
      } else {
        acc[cur.brand] = { ...cur, count: 1 };
      }
      return acc;
    }, {});

  const newMost = Object.keys(formatMost)
    .map((key) => formatMost[key])
    .sort((a: any, b: any) => b.count - a.count);
  return {
    props: {
      itemTypeData: itemTypeData,
      locationItems: locationItems,
      prices: prices,
      most: newMost[0]
    }
  };
};
