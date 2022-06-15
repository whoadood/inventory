import React from "react";
import Section from "../layout/Section";
import chartStyles from "../styles/chart.module.css";
import totalStyles from "../styles/Totals.module.css";

export default function Totals({
  avg,
  min,
  max
}: {
  avg: number;
  min: number;
  max: number;
}) {
  return (
    <Section title="Prices">
      <div className={chartStyles.chartSection}>
        <p className={totalStyles.stats}>
          <span>average: </span>
          <span>{avg}</span>
        </p>
        <p className={totalStyles.stats}>
          <span>min: </span>
          <span>{min}</span>
        </p>
        <p className={totalStyles.stats}>
          <span>max: </span>
          <span>{max}</span>
        </p>
      </div>
    </Section>
  );
}
