import React, { PropsWithChildren, ReactChildren, ReactNode } from "react";
import styles from "./Layout.module.scss";
import { Link } from "react-router-dom";

type LayoutPropsType = {
  children: PropsWithChildren<ReactNode>;
  title?: string;
};
export const Layout = ({ children, title }: LayoutPropsType) => {
  return (
    <div>
      <header className={styles.header}>
        <nav>
          <Link to={"/"}>Home</Link>
          <Link to={"/cart"}>Cart</Link>
          <Link to={"/product"}>Product</Link>
        </nav>
      </header>
      <div className={styles.layout}>
        <h1 className={styles.title}>{title}</h1>
        {children}
      </div>
    </div>
  );
};
