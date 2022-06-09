import React from "react";
import inputStyles from "../styles/FormInput.module.css";

type InputProps = {
  label: string;
  type: string;
  name: string;
  value: string;
};

export default function NewItemInput({ label, type, name, value }: InputProps) {
  return (
    <label className={inputStyles.label} htmlFor={name}>
      <span>{label}</span>
      <input type={type} name={name} value={value} />
    </label>
  );
}
