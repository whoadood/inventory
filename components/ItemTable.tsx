import React from "react";
import tableStyles from "../styles/ItemTable.module.css";
import TableHead from "./TableHead";
import type { IServerItem } from "../pages/Items";
import ItemRow from "./ItemRow";

export default function ItemTable({
  items,
  headers
}: {
  items: IServerItem[] | any;
  headers: string[];
}) {
  return (
    <table className={tableStyles.table}>
      <TableHead headers={headers} />
      <tbody>
        {items.map((item: any) => (
          <ItemRow item={item} key={item.id} />
        ))}
      </tbody>
    </table>
  );
}
