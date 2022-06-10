import React from "react";
import itemInputSectionStyles from "../styles/FormItemSection.module.css";

type FormFieldProps = {
  title: string;
  children: React.ReactNode;
};

export default function FormFields({ title, children }: FormFieldProps) {
  return (
    <div className={itemInputSectionStyles.section}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
