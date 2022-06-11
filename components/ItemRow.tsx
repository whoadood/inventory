import React from "react";
import { IServerItem } from "../pages/Items";
import tableStyles from "../styles/ItemTable.module.css";

type ItemRowProps = {
  item: IServerItem;
};

export default function ItemRow({ item }: ItemRowProps) {
  return (
    // <div className={tableStyles.row}>
    <tr className={tableStyles.iRow}>
      <td>{item.id}</td>

      <td>
        <p>{item.Item.name}</p>
        <span>{item.Brand.name}</span>
      </td>

      <td>{item.Item.Category.type}</td>

      <td>
        <p>{item.Location.name}</p>
        <span>{item.Location.address}</span>
      </td>

      <td>${item.price.toFixed(2)}</td>
    </tr>
    // </div>
  );
}
