import React, { useEffect, useState } from "react";
import styles from "./Home.module.scss";
import { productsAPI } from "../../api/productsAPI";

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
  // useEffect(() => {
  //   productsAPI
  //     .getProducts()
  //     .then((res) => {
  //       setProducts(res.data.products);
  //     })
  //     .catch((error) => {
  //       setError(error);
  //     })
  //     .finally(() => setIsLoading(false));
  // }, []);
  const [products, setProducts] = useState<Array<ProductType>>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { products }: any = await productsAPI.getProducts();
        setProducts(products);
      } catch (error: any) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData().then();
    // productsAPI
    //   .getProducts()
    //   .then((res) => {
    //     setProducts(res.data.products);
    //   })
    //   .catch((error) => {
    //     setError(error);
    //   })
    //   .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      {error}
      <div className={styles.bg}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eligendi
        harum iure minus officia ut veritatis. Minima quo recusandae
        repellendus!
      </div>
      {isLoading ? (
        <div className={styles.error}>Loading...</div>
      ) : products.length ? (
        products.map((prod) => {
          return <div>{prod.title}</div>;
        })
      ) : (
        <div className={styles.productsNF}>Product not found!</div>
      )}
    </div>
  );
};
