import React, { PropsWithChildren, ReactChildren, ReactNode } from "react";
import styles from "./Layout.module.scss";

type LayoutPropsType = {
  children: PropsWithChildren<ReactNode>;
};
export const Layout = ({ children }: LayoutPropsType) => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.heading}>Collection Products</h1>
      {children}
    </div>
  );
};
