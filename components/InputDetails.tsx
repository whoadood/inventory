import ItemDetailsCheckBox from "./ItemDetailsCheckBox";
import detailStyles from "../styles/DetailsInput.module.css";

type InputDetails = {
  id: number;
  name: string;
  address: string;
};

export default function InputDetails({ details }: { details: InputDetails[] }) {
  return (
    <ul className={detailStyles.detailSelect}>
      {details.map((detail) => (
        <ItemDetailsCheckBox key={detail.name} item={detail} />
      ))}
    </ul>
  );
}
