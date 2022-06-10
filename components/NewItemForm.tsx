import React, { useState, useEffect } from "react";
import formStyles from "../styles/CreateForm.module.css";
import InputDetails from "./InputDetails";
import FormItemSection from "./FormItemSection";
// import type { Brand } from "@prisma/client";
import useBrands from "../hooks/useBrands";
import useLocations from "../hooks/useLocations";

// item
//// price
//// working

// item details
//// name
//******* */
// category
//// type

// location
//  // name
//  // address

// brand
//  // name
//  // website

export default function NewItemForm() {
  const [item, setItem] = useState({
    price: "",
    working: true
  });

  const [details, setDetails] = useState({
    name: ""
  });

  const [location, setLocation] = useState({
    name: "",
    address: ""
  });

  const [brand, setBrand] = useState({
    name: "",
    website: ""
  });

  const { brands } = useBrands();
  const { locations } = useLocations();

  if (locations) console.log("locations", locations);

  return (
    <div>
      <form className={formStyles.form}>
        <FormItemSection
          fieldArr={[
            { id: 1, name: "name", type: "type", label: "label" },
            { id: 2, name: "name", type: "type", label: "label" },
            { id: 3, name: "name", type: "type", label: "label" }
          ]}
        />
        {brands && <InputDetails title={"Brands"} details={brands} />}
        {locations && <InputDetails title={"locations"} details={locations} />}
        <button className={formStyles.button}>Add an item</button>
      </form>
    </div>
  );
}
