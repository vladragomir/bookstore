import React, { useState } from "react";
import { BookList } from "../components/BookList.tsx";
import { SearchBar } from "../components/SearchBar.tsx";
import { ShoppingCart } from "../components/ShoppingCart.tsx";
import classes from "./BooksPage.module.css";

export const BooksPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (book: {
    id: number;
    title: string;
    price: number;
  }) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === book.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...book, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSubmit = () => {
    alert("Order submitted successfully!");
    setCartItems([]);
  };

  return (
    <div className={classes.BooksPage}>
      <div className={classes.BookListWrapper}>
        <SearchBar onSearch={setSearchQuery} />
        <BookList onAddToCart={handleAddToCart} searchQuery={searchQuery} />
      </div>
      <ShoppingCart
        cartItems={cartItems}
        onRemove={handleRemoveFromCart}
        onSubmit={handleSubmit}
      />
    </div>
  );
};
