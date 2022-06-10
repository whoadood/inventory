import React from "react";
import Link from "next/link";
import createButtonStyles from "../styles/CreateButton.module.css";

export default function CreateButton({ to }: { to: string }) {
  return (
    <div className={createButtonStyles.create}>
      <Link href={to}>
        <a className={createButtonStyles.link}>
          <span>
            +
            <span className={createButtonStyles.title}>{to.split("/")[1]}</span>
          </span>
        </a>
      </Link>
    </div>
  );
}
