import React from "react";
import footerStyles from "../styles/Footer.module.css";
import NavLink from "./NavLink";

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <NavLink href={"/Items"} title={"Items"} />
      <NavLink href={"/Brands"} title={"Brands"} />
      <NavLink href={"/Locations"} title={"Locations"} />
    </footer>
  );
}
