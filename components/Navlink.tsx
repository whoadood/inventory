import React from "react";
import Link from "next/link";
import navStyles from "../styles/Header.module.css";

type NavlinkProps = {
  href: any;
  title: string;
};

export default function Navlink({ href, title }: NavlinkProps) {
  return (
    <Link href={href}>
      <a className={navStyles.navlink}>{title}</a>
    </Link>
  );
}
