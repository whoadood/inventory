import React from "react";
import sectionStyles from "../styles/Section.module.css";

export default function Section({
  title,
  children
}: {
  title: string;
  children: React.ReactElement;
}) {
  return (
    <section className={sectionStyles.section}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
