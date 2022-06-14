import React from "react";
import { IServerItem } from "../pages/Items";
import tableStyles from "../styles/ItemTable.module.css";
import useWindowSize from "../hooks/useWindowSize";

type ItemRowProps = {
  item: IServerItem | any;
};

export default function ItemRow({ item }: ItemRowProps) {
  const { windowWidth } = useWindowSize();

  if (!item.price) {
    return (
      <tr className={tableStyles.iRow}>
        <td>{item.id}</td>

        <td>
          <p>{item.name}</p>
          <span>
            {item.website ? item.website.split("www.")[1] : item.address}
          </span>
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
        {windowWidth > 600 && <td>{item.id}</td>}

        <td>
          <p>{item.Item.name}</p>
          <span>{item.Brand.name}</span>
        </td>

        <td>{item.Item.Category.type}</td>

        <td>
          <p>{item.Location.name}</p>
          <span>{item.Location.address}</span>
        </td>

        {windowWidth > 600 && <td>${item.price.toFixed(2)}</td>}
      </tr>
    );
  }
}
