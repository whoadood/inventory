import ItemDetailsCheckBox from "./ItemDetailsCheckBox";
import { useEffect } from "react";
import detailStyles from "../styles/DetailsInput.module.css";

export default function InputDetails() {
  const details = [
    {
      name: "buffer",
      type: "tool",
    },
    {
      name: "carpet brush",
      type: "tool",
    },
    {
      name: "super polish",
      type: "consumable",
    },
  ];
  return (
    <div className={detailStyles.detailContainer}>
      <h3>Input details</h3>
      <ul className={detailStyles.detailSelect}>
        {details.map((detail) => (
          <ItemDetailsCheckBox key={detail.name} />
        ))}
      </ul>
    </div>
  );
}
