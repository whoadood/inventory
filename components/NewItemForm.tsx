import React, { useState } from "react";
import formStyles from "../styles/CreateForm.module.css";
import NewItemInput from "./NewItemInput";
import InputDetails from "./InputDetails";
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
        <InputDetails />
        <button className={formStyles.button}>Add an item</button>
      </form>
    </div>
  );
}
