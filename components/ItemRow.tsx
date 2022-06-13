import React from "react";
import { IServerItem } from "../pages/Items";
import tableStyles from "../styles/ItemTable.module.css";

type ItemRowProps = {
  item: IServerItem | any;
};

export default function ItemRow({ item }: ItemRowProps) {
  if (!item.price) {
    return (
      <tr className={tableStyles.iRow}>
        <td>{item.id}</td>

        <td>
          <p>{item.name}</p>
          <span>{item.website.split("www.")[1]}</span>
        </td>
        <td>
          {Object.keys(item.ItemInfo).map((key) => (
            <div className={tableStyles.details} key={key}>
              <div>
                <span>{key}</span>
                <p>{item.ItemInfo[key]}</p>
              </div>
            </div>
          ))}
        </td>
      </tr>
    );
  } else {
    return (
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
    );
  }
}
