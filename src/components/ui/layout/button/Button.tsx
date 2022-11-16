import React, { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.scss";

type ButtonType = {
  // title: string;
  children: ReactNode;
};

export const Button = ({
  children,
  ...rest
}: ButtonType & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
};
