import React from "react";
import inputStyles from "../styles/FormInput.module.css";

export type InputProps = {
  label: string;
  type: string;
  name: string;
  // value: string;
};

export default function NewItemInput({ label, type, name }: InputProps) {
  return (
    <label className={inputStyles.label} htmlFor={name}>
      <span>{label}</span>
      <input type={type} name={name} />
    </label>
  );
}
