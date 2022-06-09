import React from "react";
import navStyles from "../styles/Header.module.css";
import Navlink from "../components/Navlink";

export default function Header() {
  return (
    <header>
      <nav className={navStyles.navbar}>
        <Navlink href={"/"} title={"Inventory"} />
      </nav>
    </header>
  );
}
