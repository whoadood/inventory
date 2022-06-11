import React from "react";
import CheckBoxStyles from "../styles/ItemDetailsCheckBox.module.css";

export default function ItemDetailsCheckBox({
  item,
  onClick,
  active,
  setActive
}: {
  item: { id: number; name?: string; type?: string; address?: string };
  onClick: any;
  active: number | null;
  setActive: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div
      style={{ opacity: `${active === item.id ? "100%" : "50%"}` }}
      onClick={(e) => {
        setActive(item.id);

        onClick(item);
      }}
      className={CheckBoxStyles.boxContainer}
    >
      <h4 className={CheckBoxStyles.id}>
        <div className={CheckBoxStyles.details}>
          <span>{item.name ? item.name : item.type}</span>
          {item.address && (
            <span className={CheckBoxStyles.accent}>
              {item.address && item.address}
            </span>
          )}
        </div>
        <span>{item.id}</span>
      </h4>
    </div>
  );
}
