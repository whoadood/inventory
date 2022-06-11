import React from "react";
import navStyles from "../styles/Header.module.css";
import NavLink from "../components/NavLink";

export default function Header() {
  return (
    <header>
      <nav className={navStyles.navbar}>
        <NavLink href={"/"} title={"Inventory"} />
      </nav>
    </header>
  );
}
