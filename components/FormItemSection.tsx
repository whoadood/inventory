import React from "react";
import itemInputSectionStyles from "../styles/FormItemSection.module.css";
import NewItemInput, { InputProps } from "./NewItemInput";

type FieldArr = {
  id: number;
  type: string;
  name: string;
  label: string;
};

export default function FormItemSection({
  fieldArr,
}: {
  fieldArr: FieldArr[];
}) {
  return (
    <div className={itemInputSectionStyles.section}>
      <h2>hello</h2>
      <div className={itemInputSectionStyles.inputSection}>
        {fieldArr.map((field) => (
          <NewItemInput
            key={field.id}
            type={field.type}
            label={field.label}
            name={field.name}
          />
        ))}
      </div>
    </div>
  );
}
