import React from "react";
import Section from "../layout/Section";
import chartStyles from "../styles/chart.module.css";
import totalStyles from "../styles/Totals.module.css";

export default function Most({ item }: { item: any }) {
  return (
    <Section title="Most">
      <div className={chartStyles.chartSection}>
        <p className={totalStyles.stats}>
          <span>{item.type}</span>
          <span>{item.brand}</span>
        </p>
        <p className={totalStyles.stats}>
          <span>{item.website.split("www.")[1]}</span>
          <span>qty: {item.count}</span>
        </p>
      </div>
    </Section>
  );
}
