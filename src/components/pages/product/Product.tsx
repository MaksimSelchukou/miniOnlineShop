import React from "react";
import { Layout } from "../../ui/layout/Layout";
import { useQuery } from "@tanstack/react-query";
import { productsAPI } from "../../../api/productsAPI";
import { useParams } from "react-router-dom";
import styles from "../home/Home.module.scss";
import { Button } from "../../ui/layout/button/Button";
import { Gallery } from "./gallery/Gallery";
import cn from "clsx";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";

const Product = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useQuery(
    ["product"],
    () => productsAPI.getSingleProduct(id || "")
    // {
    //   select: ({ product }) => product,
    // }
  );

  const { items } = useTypedSelector((state) => state.cart);

  const { removeFromCart, addToCart } = useActions();

  const isInCart = items.some((item) => item.id === Number(id));

  if (!product) {
    return <div>Product not found!</div>;
  }
  return (
    <Layout>
      {isLoading && <div className={styles.error}>Loading...</div>}
      {/*{<h1>{product && product.description}</h1>}*/}
      <Gallery images={product.images} />
      <div className={styles.group}>
        <span className={styles.element}>{product.title}</span>
        <span className={cn(styles.element, styles.price)}>
          {new Intl.NumberFormat("EN", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
          }).format(product.price)}
        </span>
      </div>

      <Button
        onClick={() =>
          isInCart ? removeFromCart(Number(id)) : addToCart(product)
        }
      >
        {isInCart ? "this product already to cart" : "Add to cart"}
      </Button>
    </Layout>
  );
};

export default Product;
