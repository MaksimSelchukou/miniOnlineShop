import React, { useEffect, useState } from "react";
import styles from "./Home.module.scss";
import { productsAPI } from "../../../api/productsAPI";
import { useQuery } from "@tanstack/react-query";
import { ProductItem } from "../../ui/product-item/ProductItem";
import { Layout } from "../../ui/layout/Layout";

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

  // const [products, setProducts] = useState<Array<ProductType>>([]);
  // const [error, setError] = useState("");
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const { products }: any = await productsAPI.getProducts();
  //       setProducts(products);
  //     } catch (error: any) {
  //       setError(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchData().then();
  // }, []);

  return (
    <Layout>
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
