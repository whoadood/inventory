import ItemDetailsCheckBox from "./ItemDetailsCheckBox";
import { useEffect } from "react";
import detailStyles from "../styles/DetailsInput.module.css";

type InputDetails = {
  id: number;
  name: string;
  address: string;
};

export default function InputDetails({
  details,
  title
}: {
  details: InputDetails[];
  title: string;
}) {
  return (
    <div className={detailStyles.detailContainer}>
      <h3>{title}</h3>
      <ul className={detailStyles.detailSelect}>
        {details.map((detail) => (
          <ItemDetailsCheckBox key={detail.name} item={detail} />
        ))}
      </ul>
    </div>
  );
}
