import React, { useState } from "react";
import formStyles from "../styles/CreateForm.module.css";
import InputDetails from "./InputDetails";
import FormItemSection from "./FormItemSection";
import { ItemProps } from "../pages/create/Item";
import FormField from "../layout/FormFields";

export default function NewItemForm({ brands, locations }: ItemProps) {
  const [item, setItem] = useState({
    price: "",
    type: ""
  });

  const [location, setLocation] = useState({
    name: "",
    address: ""
  });

  const [brand, setBrand] = useState({
    name: "",
    website: ""
  });

  return (
    <div>
      <form className={formStyles.form}>
        <FormField title="item">
          <FormItemSection
            fieldArr={[
              { id: 1, name: "name", type: "type", label: "label" },
              { id: 2, name: "name", type: "type", label: "label" },
              { id: 3, name: "name", type: "type", label: "label" }
            ]}
          />
        </FormField>
        <FormField title="brands">
          <InputDetails details={brands} />
        </FormField>
        <FormField title="locations">
          <InputDetails details={locations} />
        </FormField>
        <button className={formStyles.button}>Add an item</button>
      </form>
    </div>
  );
}
