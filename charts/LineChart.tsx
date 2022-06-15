import React from "react";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import Section from "../layout/Section";
import chartStyles from "../styles/chart.module.css";
import { withRouter } from "next/router";

export default function LineChart({ locationItems }: { locationItems: any }) {
  const formatLocation = locationItems.map((location: any) => {
    return {
      ...location,
      ItemInfo: location.ItemInfo.reduce((acc: any, cur: any) => {
        if (acc[cur.Item.Category.type]) {
          acc[cur.Item.Category.type] += 1;
        } else {
          acc[cur.Item.Category.type] = 1;
        }
        return acc;
      }, {})
    };
  });

  console.log(formatLocation);
  const labels = [
    // @ts-ignore
    ...new Set(
      formatLocation
        .map((location: any) => Object.keys(location.ItemInfo))
        .reduce((acc: any, cur: any) => [...acc, ...cur])
    )
  ];

  const dataset = formatLocation.map((location: any, i: number) => {
    return {
      type: "bar",
      label: location.name,
      data: labels.map((label: any) => location.ItemInfo[label]),
      backgroundColor: `rgb(0, ${60 - i * 35}, ${125 - i * 25})`,
      borderColor: `rgb(0, ${60 - i * 35}, ${125 - i * 25})`
    };
  });
  data: labels.map((label: any) => {});

  console.log("labels", labels);

  return (
    <Section title="Locations">
      <div className={chartStyles.chartSection}>
        <Chart
          type="bar"
          data={{
            labels: labels,
            datasets: dataset
          }}
        />
      </div>
    </Section>
  );
}
