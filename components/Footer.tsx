import React from "react";
import footerStyles from "../styles/Footer.module.css";
import Navlink from "./Navlink";

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <Navlink href={"/Item"} title={"items"} />
      <Navlink href={"/Item"} title={"items"} />
      <Navlink href={"/Item"} title={"items"} />
    </footer>
  );
}
