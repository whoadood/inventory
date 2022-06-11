import React from "react";
import tableStyles from "../styles/ItemTable.module.css";
import TableHead from "./TableHead";
import type { IServerItem } from "../pages/Items";
import ItemRow from "./ItemRow";

export default function ItemTable({ items }: { items: IServerItem[] }) {
  const headers = ["id", "item", "type", "location", "price"];
  return (
    <table className={tableStyles.table}>
      <TableHead headers={headers} />
      <tbody>
        {items.map((item) => (
          <ItemRow item={item} key={item.id} />
        ))}
      </tbody>
    </table>
  );
}
