import React from "react";
import type { IServerItem } from "../pages";
import tableStyles from "../styles/ItemTable.module.css";

export default function TableHead({ items }: { items: IServerItem[] }) {
  return (
    <thead className={tableStyles.thead}>
      <tr className={tableStyles.tr}>
        {Object.keys(items[0]).map(
          (key) =>
            key !== "Comment" && key !== "working" && <td key={key}>{key}</td>
        )}
      </tr>
    </thead>
  );
}
