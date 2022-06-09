import React from "react";
import footerStyles from "../styles/Footer.module.css";
import Navlink from "./Navlink";

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <Navlink href={"/Items"} title={"Items"} />
      <Navlink href={"/Categories"} title={"Categories"} />
      <Navlink href={"/Locations"} title={"Locations"} />
    </footer>
  );
}
