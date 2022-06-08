import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Global({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.main}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
