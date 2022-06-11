import React from "react";
import itemInputSectionStyles from "../styles/FormItemSection.module.css";
import NewItemInput from "./NewItemInput";

export type FieldArr = {
  id: number;
  type: string;
  name: string;
  label: string;
  value: any;
};

type ItemSectionProps = {
  fieldArr: FieldArr[];
  state?: any;
  setState?: React.Dispatch<React.SetStateAction<any>>;
};

export default function FormItemSection({
  fieldArr,
  state,
  setState
}: ItemSectionProps) {
  return (
    <div className={itemInputSectionStyles.inputSection}>
      {fieldArr.map((field) => (
        <NewItemInput
          key={field.id}
          type={field.type}
          label={field.label}
          name={field.name}
          value={field.value}
          state={state}
          setState={setState}
        />
      ))}
    </div>
  );
}
