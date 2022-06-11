import ItemDetailsCheckBox from "./ItemDetailsCheckBox";
import detailStyles from "../styles/DetailsInput.module.css";
import { useState } from "react";
import FormItemSection from "../components/FormItemSection";
import type { FieldArr } from "./FormItemSection";
import { FiSettings } from "react-icons/fi";
import { BsCheckCircleFill } from "react-icons/bs";

type InputDetails = {
  id: number;
  name?: string;
  address?: string;
  type?: string;
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
  const [active, setActive] = useState<any>(null);

  const toggleState = (e: any): void => {
    e.preventDefault();
    if (newField) {
      setActive(null);
    }
    setNewField(!newField);
  };

  const handleSelect = (item: InputDetails) => {
    if (item.address) {
      setState({
        name: item.name,
        address: item.address
      });
    } else {
      setState({
        type: item.type
      });
    }
  };

  return (
    <div className={detailStyles.formSectionContainer}>
      <div
        className={`${detailStyles.buttonContainer} ${
          newField ? detailStyles.active : ""
        }`}
      >
        <button
          onClick={toggleState}
          className={`${detailStyles.button} ${
            newField ? detailStyles.active : ""
          }`}
        >
          {newField ? <BsCheckCircleFill /> : <FiSettings />}
        </button>
      </div>
      {newField ? (
        <ul className={detailStyles.detailSelect}>
          {details.map((detail) => (
            <ItemDetailsCheckBox
              onClick={handleSelect}
              key={detail.id}
              item={detail}
              active={active}
              setActive={setActive}
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
    </div>
  );
}
