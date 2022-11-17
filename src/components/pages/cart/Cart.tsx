import React from "react";
import { Layout } from "../../ui/layout/Layout";

import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { CartItem } from "../../ui/cart-item/CartItem";

export const Cart = () => {
  const { items } = useTypedSelector((state) => state.cart);
  return (
    <Layout title={"Cart"}>
      {items.length
        ? items.map((item) => <CartItem key={item.id} cartItem={item} />)
        : "Cart is null"}
    </Layout>
  );
};
