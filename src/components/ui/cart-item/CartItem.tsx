import React from "react";
import { ProductType } from "../../pages/home/Home";
import { useActions } from "../../../hooks/useActions";
import styles from "./CartItem.module.scss";
import { Button } from "../layout/button/Button";

type CartItemType = {
  cartItem: ProductType;
};

export const CartItem = ({ cartItem }: CartItemType) => {
  const { removeFromCart } = useActions();

  return (
    <>
      <div className={styles.cartItem}>
        <span>{`${cartItem.title} ${new Intl.NumberFormat("EN", {
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 0,
        }).format(cartItem.price)}`}</span>
        <span>{}</span>
        <button
          onClick={() => removeFromCart(cartItem.id)}
          className={"text-red-500"}
        >
          del
        </button>
      </div>
      <Button>Checkout</Button>
    </>
  );
};
