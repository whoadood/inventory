import React from "react";
import inputStyles from "../styles/FormInput.module.css";

export type InputProps = {
  label: string;
  type: string;
  name: string;
  value: any;
  state?: any;
  setState?: any;
};

export default function NewItemInput({
  label,
  type,
  name,
  value,
  state,
  setState
}: InputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  return (
    <label className={inputStyles.label} htmlFor={name}>
      <span>{label}</span>
      <input type={type} name={name} value={value} onChange={handleChange} />
    </label>
  );
}
