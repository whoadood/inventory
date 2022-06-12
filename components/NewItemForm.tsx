import React, { useState } from "react";
import formStyles from "../styles/CreateForm.module.css";
import InputDetails from "./InputDetails";
import FormItemSection from "./FormItemSection";
import { ItemProps } from "../pages/create/Item";
import FormField from "../layout/FormFields";

export default function NewItemForm({
  brands,
  locations,
  categories
}: ItemProps) {
  const [item, setItem] = useState({
    price: "",
    name: ""
  });

  const [category, setCategory] = useState({ type: "" });

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

      // console.log("item", item);
      // console.log("location", location);
      // console.log("brand", brand);
      // console.log("category", category);

      if (item.name === "" || item.price === "") {
        console.log("error item fields");
        return;
      }
      if (category.type === "") {
        console.log("category error");
        return;
      }
      if (brand.name === "" || brand.address === "") {
        console.log("brand field error");
        return;
      }
      if (location.name === "" || location.address === "") {
        console.log("location field error");
        return;
      }
      const response = await fetch("/api/item/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          item,
          brand,
          location,
          category
        })
      });
      const data = await response.json();

      console.log("post req response", data);
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
                name: "name",
                type: "text",
                label: "name",
                value: item.name
              }
            ]}
            state={item}
            setState={setItem}
          />
        </FormField>
        <FormField title="category">
          <InputDetails
            fieldArr={[
              {
                id: 1,
                name: "type",
                type: "text",
                label: "type",
                value: category.type
              }
            ]}
            details={categories}
            state={category}
            setState={setCategory}
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
                name: "address",
                type: "text",
                label: "address",
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
