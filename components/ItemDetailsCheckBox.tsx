import React from "react";
import CheckBoxStyles from "../styles/ItemDetailsCheckBox.module.css";

export default function ItemDetailsCheckBox({
  item,
}: {
  item: { id: number; name: string; address: string };
}) {
  return (
    <div className={CheckBoxStyles.boxContainer}>
      <h4 className={CheckBoxStyles.id}>
        <div className={CheckBoxStyles.details}>
          <span>{item.name}</span>
          <span className={CheckBoxStyles.accent}>{item.address}</span>
        </div>
        <span>{item.id}</span>
      </h4>
    </div>
  );
}
