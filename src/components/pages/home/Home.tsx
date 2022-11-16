import React, { useEffect, useState } from "react";
import styles from "./Home.module.scss";
import { productsAPI } from "../../../api/productsAPI";
import { useQuery } from "@tanstack/react-query";
import { ProductItem } from "../../ui/product-item/ProductItem";
import { Layout } from "../../ui/layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
};

export const Home = () => {
  const { data: products, isLoading } = useQuery(
    ["products"],
    () => productsAPI.getProducts(),
    {
      select: ({ products }) => products,
    }
  );

  return (
    <Layout title={"Collection Products"}>
      {isLoading ? (
        <div className={styles.error}>Loading...</div>
      ) : products?.length ? (
        <div className={styles.wrapper}>
          {products.map((prod) => {
            return <ProductItem product={prod} key={prod.id} />;
          })}
        </div>
      ) : (
        <div className={styles.productsNF}>Product not found!</div>
      )}
    </Layout>
  );
};
