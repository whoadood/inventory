import React, { useState } from "react";
import formStyles from "../styles/CreateForm.module.css";
import NewItemInput from "./NewItemInput";
import InputDetails from "./InputDetails";
import FormItemSection from "./FormItemSection";
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
    working: true,
  });

  const [details, setDetails] = useState({
    name: "",
  });

  const [location, setLocation] = useState({
    name: "",
    address: "",
  });

  const [brand, setBrand] = useState({
    name: "",
    website: "",
  });

  return (
    <div>
      <form className={formStyles.form}>
        <FormItemSection
          fieldArr={[
            { id: 1, name: "name", type: "type", label: "label" },
            { id: 2, name: "name", type: "type", label: "label" },
            { id: 3, name: "name", type: "type", label: "label" },
          ]}
        />
        <InputDetails
          details={[
            { id: 1, name: "location 1", website: "website" },
            { id: 2, name: "location 2", website: "website" },
            { id: 3, name: "location 3", website: "website" },
          ]}
        />
        <InputDetails
          details={[
            { id: 1, name: "location 1", website: "website" },
            { id: 2, name: "location 2", website: "website" },
            { id: 3, name: "location 3", website: "website" },
          ]}
        />
        <FormItemSection
          fieldArr={[
            { id: 1, name: "name", type: "type", label: "label" },
            { id: 2, name: "name", type: "type", label: "label" },
          ]}
        />
        <button className={formStyles.button}>Add an item</button>
      </form>
    </div>
  );
}
