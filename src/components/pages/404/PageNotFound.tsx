import React, { useEffect, useState } from "react";
import styles from "./PageNotFound.module.scss";
import { useNavigate } from "react-router-dom";

export const PageNotFound = () => {
  let [timer, SetTimer] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const FunctSetTimeoot = setTimeout(() => {
      SetTimer(timer + 1);
      console.log(timer);
    }, 1000);
    if (timer >= 5) {
      return clearTimeout(FunctSetTimeoot);
    }
  }, [timer]);
  if (timer === 5) {
    return navigate("/");
  }
  return <div className={styles.page}>Page not found!</div>;
};
