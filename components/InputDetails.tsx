import ItemDetailsCheckBox from "./ItemDetailsCheckBox";
import detailStyles from "../styles/DetailsInput.module.css";
import { useState } from "react";
import FormItemSection from "../components/FormItemSection";
import type { FieldArr } from "./FormItemSection";
import { FiSettings } from "react-icons/fi";
import { BsCheckCircleFill } from "react-icons/bs";

type InputDetails = {
  id: number;
  name: string;
  address: string;
};

export default function InputDetails({
  details,
  fieldArr
}: {
  details: InputDetails[];
  fieldArr: FieldArr[];
}) {
  const [newField, setNewField] = useState<boolean>(false);
  const toggleState = (e: any): void => {
    e.preventDefault();
    setNewField(!newField);
  };
  return (
    <div className={detailStyles.formSectionContainer}>
      {newField ? (
        <ul className={detailStyles.detailSelect}>
          {details.map((detail) => (
            <ItemDetailsCheckBox key={detail.name} item={detail} />
          ))}
        </ul>
      ) : (
        <FormItemSection fieldArr={fieldArr} />
      )}
      <button onClick={toggleState} className={detailStyles.button}>
        {newField ? <FiSettings /> : <BsCheckCircleFill />}
      </button>
    </div>
  );
}
