import ItemDetailsCheckBox from "./ItemDetailsCheckBox";
import { useEffect } from "react";
import detailStyles from "../styles/DetailsInput.module.css";

export default function InputDetails({ details }: { details: any[] }) {
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
