import React from "react";
import Link from "next/link";
import navStyles from "../styles/Header.module.css";

type NavLinkProps = {
  href: any;
  title: string;
};

export default function NavLink({ href, title }: NavLinkProps) {
  return (
    <Link href={href}>
      <a className={navStyles.navLink}>{title}</a>
    </Link>
  );
}
