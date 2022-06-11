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
    address: ""
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      console.log("item", item);
      console.log("location", location);
      console.log("brand", brand);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={formStyles.form}>
        <FormField title="item">
          <FormItemSection
            fieldArr={[
              {
                id: 1,
                name: "price",
                type: "text",
                label: "price",
                value: item.price
              },
              {
                id: 2,
                name: "type",
                type: "text",
                label: "type",
                value: item.type
              }
            ]}
            state={item}
            setState={setItem}
          />
        </FormField>
        <FormField title="brands">
          <InputDetails
            fieldArr={[
              {
                id: 1,
                name: "name",
                type: "text",
                label: "name",
                value: brand.name
              },
              {
                id: 2,
                name: "website",
                type: "text",
                label: "website",
                value: brand.address
              }
            ]}
            details={brands}
            state={brand}
            setState={setBrand}
          />
        </FormField>
        <FormField title="locations">
          <InputDetails
            fieldArr={[
              {
                id: 1,
                name: "name",
                type: "text",
                label: "name",
                value: location.name
              },
              {
                id: 2,
                name: "address",
                type: "text",
                label: "address",
                value: location.address
              }
            ]}
            details={locations}
            state={location}
            setState={setLocation}
          />
        </FormField>
        <button className={formStyles.button}>Add an item</button>
      </form>
    </div>
  );
}
