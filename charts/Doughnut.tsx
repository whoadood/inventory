import React from "react";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import Section from "../layout/Section";
import chartStyles from "../styles/chart.module.css";

export default function DoughnutChart({ data }: { data: any }) {
  const getLabels = data.map((item: any) => item.name);
  const getData = data.map((item: any) => item._count.ItemInfo);
  const getColors = data.map(
    (item: any, i: number) => `rgb(0, ${60 - i * 35}, ${125 - i * 25})`
  );

  console.log("chart data", getLabels);
  console.log("chart data", getData);

  const formatData = {
    labels: getLabels,
    datasets: [{ data: getData, backgroundColor: getColors }]
  };

  return (
    <Section title="Item Type">
      <div className={chartStyles.chartSection}>
        <Chart type="doughnut" options={{ color: "white" }} data={formatData} />
      </div>
    </Section>
  );
}
