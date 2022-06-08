import React from "react";
import tableStyles from "../styles/ItemTable.module.css";
import TableHead from "./TableHead";
import type { IServerItem } from "../pages";

export default function ItemTable({ items }: { items: IServerItem[] }) {
  console.log(items);

  return (
    <table className={tableStyles.table}>
      <TableHead items={items} />
      <tbody>
        <tr className={tableStyles.tr}>
          <td>row 1</td>
          <td>row 2</td>
          <td>row 3</td>
        </tr>
      </tbody>
    </table>
  );
}
