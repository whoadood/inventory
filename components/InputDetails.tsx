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

type InputFieldProps = {
  details: InputDetails[];
  fieldArr: FieldArr[];
  state: any;
  setState: React.Dispatch<React.SetStateAction<any>>;
};

export default function InputDetails({
  details,
  fieldArr,
  state,
  setState
}: {
  details: InputDetails[];
  fieldArr: FieldArr[];
  state: any;
  setState: React.Dispatch<React.SetStateAction<any>>;
}) {
  const [newField, setNewField] = useState<boolean>(false);

  const toggleState = (e: any): void => {
    e.preventDefault();
    setNewField(!newField);
  };

  const handleSelect = (item: InputDetails) => {
    setState({
      name: item.name,
      address: item.address
    });
  };

  return (
    <div className={detailStyles.formSectionContainer}>
      {newField ? (
        <ul className={detailStyles.detailSelect}>
          {details.map((detail) => (
            <ItemDetailsCheckBox
              onClick={handleSelect}
              key={detail.name}
              item={detail}
            />
          ))}
        </ul>
      ) : (
        <FormItemSection
          state={state}
          setState={setState}
          fieldArr={fieldArr}
        />
      )}
      <button onClick={toggleState} className={detailStyles.button}>
        {newField ? <FiSettings /> : <BsCheckCircleFill />}
      </button>
    </div>
  );
}
