import ItemDetailsCheckBox from "./ItemDetailsCheckBox";
import { useEffect } from "react";
import detailStyles from "../styles/DetailsInput.module.css";

type InputDetails = {
  id: number;
  name: string;
  website: string;
};

export default function InputDetails({ details }: { details: InputDetails[] }) {
  return (
    <div className={detailStyles.detailContainer}>
      <h3>Input details</h3>
      <ul className={detailStyles.detailSelect}>
        {details.map((detail) => (
          <ItemDetailsCheckBox key={detail.name} item={detail} />
        ))}
      </ul>
    </div>
  );
}
