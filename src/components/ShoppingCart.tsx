import React from "react";
import classes from "./ShoppingCart.module.css";

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

interface Props {
  cartItems: CartItem[];
  onRemove: (id: number) => void;
  onSubmit: () => void;
}

export const ShoppingCart = ({ cartItems, onRemove, onSubmit }: Props) => {
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <aside className={classes.ShoppingCart}>
      <h3>Shopping Cart</h3>
      {cartItems.map((item) => (
        <div key={item.id} className={classes.CartItem}>
          <p>
            {item.title} - ${item.price.toFixed(2)} x {item.quantity}
          </p>
          <button onClick={() => onRemove(item.id)}>Remove</button>
        </div>
      ))}
      <hr />
      <p>Total: ${totalPrice.toFixed(2)}</p>
      <button onClick={onSubmit}>Submit</button>
    </aside>
  );
};
