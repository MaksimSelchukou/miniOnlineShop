import React from "react";
import { Layout } from "../../ui/layout/Layout";
import { useQuery } from "@tanstack/react-query";
import { productsAPI } from "../../../api/productsAPI";
import { useParams } from "react-router-dom";
import styles from "../home/Home.module.scss";
import { Button } from "../../ui/layout/button/Button";
import { Gallery } from "./gallery/Gallery";

const Product = () => {
  const { id } = useParams();
  // console.log(id);
  const { data: product, isLoading } = useQuery(
    ["product"],
    () => productsAPI.getSingleProduct(id || "")
    // {
    //   select: ({ product }) => product,
    // }
  );
  if (!product) {
    return <div>Product not found!</div>;
  }
  return (
    <Layout>
      {isLoading && <div className={styles.error}>Loading...</div>}
      {/*{<h1>{product && product.description}</h1>}*/}
      <Gallery images={product.images} />
      <Button>Add to cart</Button>
    </Layout>
  );
};

export default Product;
