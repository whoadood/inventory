import React from "react";
import type { IServerItem } from "../pages/Items";
import tableStyles from "../styles/ItemTable.module.css";

export default function TableHead({ headers }: { headers: string[] }) {
  return (
    <thead className={tableStyles.thead}>
      <tr>
        {headers.map(
          (key) =>
            key !== "Comment" && key !== "working" && <th key={key}>{key}</th>
        )}
      </tr>
    </thead>
  );
}
