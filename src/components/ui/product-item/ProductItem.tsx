import React, { FC } from "react";
import { ProductType } from "../../pages/home/Home";
import styles from "./Product.module.scss";
import { Link } from "react-router-dom";
//
// type ProductItemType = {
//   product: ProductType;
// };

export const ProductItem: FC<{ product: ProductType }> = ({ product }) => {
  return (
    <div style={{ backgroundImage: `url${product}` }} className={styles.item}>
      {product.title && <span> {product.title}</span>}
      <Link to={`/product/${product.id}`}>
        <img
          className={styles.image}
          src={product.images[0]}
          alt={product.title}
        />
      </Link>
      <span>
        {new Intl.NumberFormat("EN", {
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 0,
        }).format(product.price)}
      </span>
    </div>
  );
};
