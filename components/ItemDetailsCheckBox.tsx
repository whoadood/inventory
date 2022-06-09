import React from "react";
import CheckBoxStyles from "../styles/ItemDetailsCheckBox.module.css";

export default function ItemDetailsCheckBox() {
  return (
    <div className={CheckBoxStyles.boxContainer}>
      <h4 className={CheckBoxStyles.id}>
        <div className={CheckBoxStyles.details}>
          <span>itemName</span>
          <span className={CheckBoxStyles.accent}>itemType</span>
        </div>
        <span>id</span>
      </h4>
    </div>
  );
}
